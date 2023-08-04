import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL, FOOD_BY_ID_URL } from 'src/app/shared/constants/urls';
import { Foods } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/model/tag';
import { sample_foods, sample_tags } from 'src/data ';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }
  
  
  
  // getAll1():Observable<Foods[]>{
  //  return this.http.get<Foods[]>(FOODS_URL);
  // }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.http.get<Foods[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  gatAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(FOODS_TAGS_URL)
  }
  //  DOUBT NICHE WALA CODE TIME 6:51
  getAllFoodsByTag(tag : string): Observable<Foods[]> {
    return tag ===  "All"?
    this.getAll():
    this.http.get<Foods[]>(FOODS_BY_TAG_URL + tag);
  }

getFoodById(foodId:number):Observable<Foods>{
    return this.http.get<Foods>(FOOD_BY_ID_URL + foodId);
}
   
   getAll():Observable<Foods[]>{
    return this.http.get<Foods[]>(FOODS_URL)
    }
}
 
