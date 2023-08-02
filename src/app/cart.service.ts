import { Injectable } from '@angular/core';
import { Cart } from './shared/model/Cart';
import { BehaviorSubject } from 'rxjs';
import { Foods } from './shared/model/food';
import { CartItem } from './shared/model/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getCartObservable() {
    throw new Error('Method not implemented.');
  }
private cart:Cart = new Cart();
private cartSubject : BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }
  addToCart(food:Foods):void{
    let cartItem = this.cart.items.find(item => item.food.id == food.id)
    if(cartItem)
    return;
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(item =>item.food.id != foodId);
  }

  changeQuantity(foodId:number,quantity:number){
    let cartItem = this.cart.items
    .find(item =>item.food.id ===foodId);
  }

}
