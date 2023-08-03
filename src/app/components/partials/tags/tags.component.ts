import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { Tag } from 'src/app/shared/model/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
   tags?:Tag[];
   constructor(foodService:FoodService){
     foodService.gatAllTags().subscribe(serverTags =>{
      this.tags = serverTags;
     });
   }
}
