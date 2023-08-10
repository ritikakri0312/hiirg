import { Schema , model } from "mongoose";


export interface Foods{              
    id:number;                                              
    name:string;
    price:number;
    tags:string[];
    favorite:boolean;
    star:number;
    imageUrl:string;
    origins:string[];
    cookTime:string;
    }

    // export class Foods{
    //     id!:number;
    //     name!:string;
    //     price!:number;
    //     tags?:string[];
    //     favorite:boolean = false;
    //     star:number = 0;
    //     imageUrl!:string;
    //     origins!:string[];
    //     cookTime!:string;
       
    // }
   

export const FoodSchema = new Schema<Foods>(
    
{
name:{type:String,required:true},
price:{type:Number,required:true},
tags:{type:[String]},
favorite:{type:Boolean,default:false},
star:{type:Number,required:true},
imageUrl:{type:String,required:true},
origins:{type:[String],required:true},
cookTime:{type:String,required:true}
},
{

toJSON:{
    virtuals: true
},
toObject:{
    virtuals:true
},

timestamps:true
}

);

export const FoodModels = model<Foods>('food', FoodSchema);