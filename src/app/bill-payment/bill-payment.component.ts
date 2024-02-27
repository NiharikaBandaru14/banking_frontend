import { Component } from '@angular/core';

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.component.html',
  styleUrls: ['./bill-payment.component.css']
})
export class BillPaymentComponent {
  recipient: string = '';
  amount: number = 0;

  makePayment() {
    console.log(`Payment of $${this.amount} to ${this.recipient} initiated.`);
    this.recipient = '';
    this.amount = 1000;
  }
}
