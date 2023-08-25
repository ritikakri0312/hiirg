
import { Foods } from "./models/food.model";

export const sample_foods: any[] = [
  {
    id:'1',
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
      id:'2',
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
      id:'3',
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
      id:'4',
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
      id:'5',
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
      id:'6',
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
      id:'7',
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
      id:'8',
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


 export const sample_tags:any[]= [
        { name: 'All', count: 6 },
        { name: 'FastFood', count: 4 },
        { name: 'Pizza', count: 2 },
        { name: 'Lunch', count: 3 },
        { name: 'SlowFood', count: 2 },
        { name: 'Hamburger', count: 1 },
        { name: 'Fry', count: 1 },
        { name: 'Soup', count: 1 },
      ]

      export const sample_users: any[] = [
        {
          name: "Ritika gupta",
          email: "ritikakri0312@gmail.com",
          password:"12345",
          address: "bihar",
          isAdmin: true,
        },
        {
          name: "Hemant Ranjan",
          email:"hemantrj098@gmail.com",
          password: "678910",
          address: "pune",
          isAdmin: false,

        }
      ];
