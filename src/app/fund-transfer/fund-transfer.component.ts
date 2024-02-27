import { Component } from '@angular/core';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent {
  fromAccount: string = "nihar";
  toAccount: string = "harika";
  amount: number = 1100;

  transferFunds() {
    console.log(`Transfer of $${this.amount} from ${this.fromAccount} to ${this.toAccount} initiated.`);
    this.fromAccount = 'nihari';
    this.toAccount = 'harika';
    this.amount = 100;
  }
}
