import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  order: Order = new Order();
  checkoutForm!: FormGroup;

  showPayment = false;        // <-- For mock payment modal
  totalPrice: number = 0;     // <-- Always number (not undefined)

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private orderService: OrderService,
    private router: Router
  ) {

    // Load cart values
    const cart = this.cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;

    this.totalPrice = cart.totalPrice;   // FIX: avoids undefined
  }

  ngOnInit(): void {
    const user = this.userService.currentUser;

    // Prefill user data
    this.checkoutForm = this.formBuilder.group({
      name: [user?.name || '', Validators.required],
      address: [user?.address || '', Validators.required]
    });
  }

  get fc() {
    return this.checkoutForm.controls;
  }

  // ------------------------------------------
  //  OPEN MOCK PAYMENT MODAL
  // ------------------------------------------
openPayment() {
  if (this.checkoutForm.invalid) {
    this.toastrService.warning('Please fill in the required fields');
    return;
  }

  if (!this.order.addressLatLng) {
    this.toastrService.warning('Select your location on the map');
    return;
  }

  this.showPayment = true;
}

  // -------------------------------------------------
  //  AFTER SUCCESSFUL MOCK PAYMENT (from modal emit)
  // -------------------------------------------------
  onPaymentSuccess() {
    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;

    this.orderService.create(this.order).subscribe({
      next: () => {
        this.toastrService.success("Order placed successfully!");
        this.router.navigateByUrl('/tracking');
      },
      error: () => {
        this.toastrService.error("Order failed");
      }
    });
  }

}
