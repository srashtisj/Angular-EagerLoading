import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ADashboardComponent } from './dashboard/a-dashboard/a-dashboard.component';
import { AccountingComponent } from './accounting/accounting.component';
import { PaymentComponent } from './payment/payment.component';
import { ReportingComponent } from './reporting/reporting.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserComponent,
    pathMatch: 'full'
  },
  {
    path: 'adashboard',
    component: ADashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'accounting',
    component: AccountingComponent,
    pathMatch: 'full'
  },
  {
    path: 'payment',
    component: PaymentComponent,
    pathMatch: 'full'
  },
  {
    path: 'reporting',
    component: ReportingComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
