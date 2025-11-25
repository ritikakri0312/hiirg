import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean = false;
  user: any;
  cartQuantity: number = 0;

  showMenu: boolean = false;

  constructor(
    private userService: UserService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.userService.userObservable.subscribe(user => {
      this.isAuth = !!user.token;
      this.user = user;
    });

    this.cartService.getCartObservable().subscribe(cart => {
      this.cartQuantity = cart.totalCount;
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  logout() {
    this.userService.logout();
  }
}

