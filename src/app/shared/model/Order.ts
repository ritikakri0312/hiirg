import { LatLng } from "leaflet";
import { CartItem } from "../CartItem";

export class Order{
    id!:number;
    items!:CartItem[];
    totalPrice!:number;
    name!:string;
    address!:string;
    addressLasLng?:LatLng;
    paymentid!:string;
    createdAt!:string;
    status!:string;

}