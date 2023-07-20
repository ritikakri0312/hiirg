import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return[

      {
      id: 1,
      price:10,
      name: 'pizza pepperoni',
      favorite:false,
      star:4.5,
      tags:['fastfood','pizza','lunch'],
      imageUrl:'/assets/pizza.jpg',
      cookTime:'10-20',
      origins:['itly'],
      },
      {
        id: 2,
        price:20,
        name: 'burger',
        favorite:true,
        star:4.7,
        tags:['Slowfood','lunch'],
        imageUrl:'/assets/burger.jpg',
        cookTime:'20-30',
        origins:['persia','middle east','china'],
       },

       {
        id: 3,
        price:3,
        name: 'dhosa',
        favorite:false,
        star:3.5,
        tags:['Fastfood','lunch'],
        imageUrl:'/assets/dhosa.jpg',
        cookTime:'10-15',
        origins:['germany','us'],
       },
       {
        id: 4,
        price:2,
        name: 'dhosa',
        favorite:true,
        star:3.3,
        tags:['Fastfood','fry'],
        imageUrl:'/assets/french fries.jpg',
        cookTime:'15-20',
        origins:['belgium','france','indian'],
       },
       {
        id: 5,
        price:2,
        name: 'sndwich',
        favorite:false,
        star:3.3,
        tags:['slowfood','fry'],
        imageUrl:'/assets/sandwich.jpg',
        cookTime:'40-50',
        origins:['asia','indian'],
       },

       {
        id: 6,
        price:9,
        name: 'sezwan',
        favorite:false,
        star:4.0,
        tags:['slowfood','fry'],
        imageUrl:'/assets/sezwan.jpg',
        cookTime:'40-50',
        origins:['Itly'],
       },

       {
        id: 7,
        price:10,
        name: 'soup',
        favorite:false,
        star:4.0,
        tags:['slowfood','fry'],
        imageUrl:'/assets/veg soup.jpg',
        cookTime:'20-30',
        origins:['indian'],
       },

       {
        id: 8,
        price:5,
        name: 'manchurian',
        favorite:true,
        star:4.0,
        tags:['fastfood','fry','pizza'],
        imageUrl: '/assets/veg-manchurian.jpg',
        cookTime:'10-15',
        origins:['indian'],
       },
     ];
  }
}


// '/assets/pizza.jpg',
// '/assets/burger.jpg',
// '/assets/dhosa.jpg',
// '/assets/french fries.jpg',
// '/assets/sandwich.jpg',
// '/assets/sezwan.jpg',
// '/assets/veg soup.jpg',
// '/assets/veg-manchurian.jpg'