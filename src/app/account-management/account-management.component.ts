import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css']
})
export class AccountManagementComponent implements OnInit {
  isLoading: boolean = false;
  accounts: any[] = [
    { accountNumber: '123456789', balance: 5000 },
    { accountNumber: '987654321', balance: 8000 }
  ];

  constructor() { }

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
