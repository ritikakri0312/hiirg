import { Component,OnInit } from '@angular/core';
import { Foods } from '../shared/model/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent  implements OnInit{
  food!:Foods;
  constructor(private activatedRoute:ActivatedRoute,
     private foodServices:FoodService ){
      activatedRoute.params.subscribe((params)=>{
       if(params['id'])
       this.food = foodServices.getFoodById(params['id'])
      })
     }

  
  ngOnInit(): void {
      
  }

}
