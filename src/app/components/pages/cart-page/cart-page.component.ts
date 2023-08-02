import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { CartItem } from 'src/app/shared/CartItem';
import { Cart } from 'src/app/shared/model/Cart';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent implements OnInit {
  cart!: Cart;
    constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart: Cart) => {
      this.cart = cart;
    })
  }

  ngOnInit():void{
}

   removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
   }

   changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity  = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
   }
  

}
