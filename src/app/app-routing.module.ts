import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { LoanManagementComponent } from './loan-management/loan-management.component';
import { BillPaymentComponent } from './bill-payment/bill-payment.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, // Redirect to home page by default
  { path: 'welcome', component: WelcomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountManagementComponent },
  { path: 'transfer', component: FundTransferComponent },
  { path: 'loan', component: LoanManagementComponent },
  { path: 'bill-payment', component: BillPaymentComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
