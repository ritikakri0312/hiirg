import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Cart } from 'src/app/shared/model/Cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
   
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart: Cart)=>{
      this.cart = cart;
    })
  }

  ngOnInit():void{

  }
  

}
