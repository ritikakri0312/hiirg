import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL, FOOD_BY_ID_URL } from 'src/app/shared/constants/urls';
import { Foods } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/model/tag';
import { sample_tags } from 'src/data ';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }
  
  
  
  getAllFIRST():Observable<Foods[]>{
   return this.http.get<Foods[]>(FOODS_URL);
  }

  

  gatAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(FOODS_TAGS_URL)
  }
  //  DOUBT NICHE WALA CODE TIME 6:51
  getAllFoodsByTag(tag : string): Observable<Foods[]> {
    return tag ===  "All"?
    this.getAllFIRST():
    this.http.get<Foods[]>(FOODS_BY_TAG_URL + tag);
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.http.get<Foods[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }
   


  getFoodById(foodId:number):Observable<Foods>{
    return this.http.get<Foods>(FOOD_BY_ID_URL + foodId);
}
   
   
  

  getAll():Foods[]{
    return[

      {
      id: 1,
      name: 'pizza',
      price:10,
      cookTime:'10-20',
      favorite:false,
      origins:['itly'],
      star:4.5,
      imageUrl:'/assets/pizza.jpg',
      tags:['fastfood','pizza','lunch'],
      },
      
      {
        id: 2,
        name: 'burger',
        price:20,
        cookTime:'20-30',
        favorite:true,
        origins:['persia','middle east','china'],
        star:4.7,
        imageUrl:'/assets/burger.jpg',
        tags:['Slowfood','lunch'],
        },

       {
        id: 3,
        name: 'dhosa',
        price:3,
        cookTime:'10-15',
        favorite:false,
        origins:['germany','us'],
        star:3.5,
        imageUrl:'/assets/dhosa.jpg',
        tags:['Fastfood','lunch'],
        },
       {
        id: 4,
        name: 'french-fries',
        price:2,
        cookTime:'15-20',
        favorite:true,
        origins:['belgium','france','indian'],
        star:3.3,
        imageUrl:'/assets/french fries.jpg',
        tags:['Fastfood','fry'],
       },
       {
        id: 5,
        name: 'sandwich',
        price:2,
        cookTime:'40-50',
        favorite:false,
        origins:['asia','indian'],
        star:3.3,
        imageUrl:'/assets/sandwich.jpg',
        tags:['slowfood','fry'],
       
       
       },

       {
        id: 6,
        name: 'Schezwan-noodles',
        price:9,
        cookTime:'40-50',
        favorite:false,
        origins:['Itly'],
        star:4.0,
        imageUrl:'/assets/sezwan.jpg',
        tags:['slowfood','fry'],
        
        },

       {
        id: 7,
        name: 'soup',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['indian'],
        star:4.0,
        imageUrl:'/assets/soup.jpg',
        tags:['slowfood','fry'],
        
        
        
       },

       {
        id: 8,
        name: 'manchurian',
        price:5,
        cookTime:'10-15',
        favorite:true,
        origins:['indian'],
        star:4.0,
        imageUrl: '/assets/manchurian2.jpg',
        tags:['fastfood','fry','pizza'],
        
      },
     ];
  }
}
 
