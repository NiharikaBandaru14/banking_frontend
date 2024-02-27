import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Import your AppRoutingModule

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
//import { HomeComponent } from './home/home.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { LoanManagementComponent } from './loan-management/loan-management.component';
import { BillPaymentComponent } from './bill-payment/bill-payment.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    //HomeComponent,
    AccountManagementComponent,
    FundTransferComponent,
    LoanManagementComponent,
    BillPaymentComponent,
    NotificationsComponent,
    AdminDashboardComponent,
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule // Add AppRoutingModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
