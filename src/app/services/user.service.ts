import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import { User } from '../shared/models/user';

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());

  public userObservable: Observable<User> = this.userSubject.asObservable();

  constructor(
    private http: HttpClient,
    private toastrService: ToastrService
  ) {}

  // --- ALWAYS return a valid user object ---
  public get currentUser(): User {
    return this.userSubject.value ?? new User();
  }

  // ---------------------- LOGIN ------------------------
  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to RG 😊 Food Corner, ${user.name}`,
            'Login Successful'
          );
        },
        error: (err) => {
          this.toastrService.error(err.error, 'Login Failed');
        }
      })
    );
  }

  // ---------------------- REGISTER ------------------------
  register(userRegister: IUserRegister): Observable<User> {
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to RG 😊 Food Corner, ${user.name}`,
            'Register Successful'
          );
        },
        error: (err) => {
          this.toastrService.error(err.error, 'Register Failed');
        }
      })
    );
  }

  // ---------------------- LOGOUT ------------------------
  logout() {
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  // ---------------------- LOCAL STORAGE HELPERS ------------------------
  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if (!userJson) return new User();

    try {
      return JSON.parse(userJson) as User;
    } catch {
      return new User();
    }
  }
}
