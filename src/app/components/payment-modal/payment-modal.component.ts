import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.css']
})
export class PaymentModalComponent {

  @Input() amount: number = 0;
  @Output() paymentSuccess = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();

  isProcessing = false;

  payNow() {
    this.isProcessing = true;

    setTimeout(() => {
      this.isProcessing = false;
      this.paymentSuccess.emit();   // Send event to parent
    }, 2000);   // Fake 2 sec wait
  }
}
