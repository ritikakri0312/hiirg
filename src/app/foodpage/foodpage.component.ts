import { Component,OnInit } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent  implements OnInit{
  food!:Food;
  constructor( activatedRoute:ActivatedRoute,foodServices:FoodService ,
   private cartService:CartService,private router:Router){
      activatedRoute.params.subscribe((params)=>{
       if(params.id)
        foodServices.getFoodById(params.id).subscribe(serverFood =>{
             this.food = serverFood;  
        });
      })
     }

  
  ngOnInit(): void {
      
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
