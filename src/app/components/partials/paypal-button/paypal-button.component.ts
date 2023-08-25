import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'backend/src/models/order.model';

@Component({
  selector: 'paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css']
})
export class PaypalButtonComponent implements OnInit {
  
  @Input()
  order!:Order;



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
