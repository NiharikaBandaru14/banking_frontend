import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-management',
  templateUrl: './loan-management.component.html',
  styleUrls: ['./loan-management.component.css']
})
export class LoanManagementComponent {
  loanType: string = 'hairka';
  loanAmount: number = 100;
  loanDuration: number = 2;

  applyLoan() {
    // Implement logic to submit loan application
    console.log('Loan application submitted.');
    console.log('Loan Type:', this.loanType);
    console.log('Loan Amount:', this.loanAmount);
    console.log('Loan Duration:', this.loanDuration);
    // Reset form fields after submission
    this.loanType = '';
    this.loanAmount = 100;
    this.loanDuration = 2;
  }
}
