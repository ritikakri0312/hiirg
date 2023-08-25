import { Component,OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Food[] = [];
  constructor(private foodService:FoodService , activatesRoute:ActivatedRoute){ 
    let foodsObservable:Observable<Food[]>;
    activatesRoute.params.subscribe((params) =>{
     if(params.searchTerm)
           foodsObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
        else if(params.tag)
        foodsObservable = this.foodService.getAllFoodsByTag(params.tag);
        else 
      foodsObservable =foodService.getAll();

        foodsObservable.subscribe((serverFoods) => {
          this.foods = serverFoods;
        })
    })
  }
  
  
  ngOnInit(): void {
  
     
  }

}
