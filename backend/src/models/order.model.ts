import { from } from "rxjs";
import{model,Schema,Types} from 'mongoose';
import { Foods, FoodSchema } from "./food.model";


export interface LatLng{
    lat: string;
    lng: string;
}

export const LatLngSchema = new Schema<LatLng>(
    {
        lat: {type: String, required: true},
        lng: {type: String, required: true},
    }
);


export interface OrderItem{
    food: Foods;
    price: number;
    quantity: number;
}

export const OrderItemSchema =  new Schema<OrderItem>(
    {
        food:{type: FoodSchema,required: true},
        price:{type: Number, required:true},
        quantity:{type:Number,required: true}
    }
);


export class Order{
    id!:number;
    items!:OrderItem[];
    totalPrice!:number;
    name!:string;
    address!:string;
    addressLatLng?:LatLng;
    paymentId!:string;
    createdAt!:string;
    status!:string;

}