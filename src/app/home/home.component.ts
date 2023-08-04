import { Component,OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/model/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Foods[] = [];
  constructor(private foodService:FoodService , activatesRoute:ActivatedRoute){ 
    let foodObservable:Observable<Foods[]>;
    activatesRoute.params.subscribe((params) =>{
     if(params.searchTerm)
           foodObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
        else if(params.tag)
        foodObservable = this.foodService.getAllFoodsByTag(params.tag);
        else 
      foodObservable =foodService.getAll();

        foodObservable.subscribe((serverFoods)=>{
          this.foods = serverFoods;
        })
    })
  }
  
  
  ngOnInit(): void {
    // this.router.params.subscribe(params =>{
    //   if(params['searchItem'])
    //   this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
    //   // else if(params['tag'])
    //   // this.foods = this.fs.getAllFoodByTag(params['tag'])
    //   else 
    //   this.foods = this.fs.getAll();
    // })

    
     
  }

}
