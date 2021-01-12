import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { RedeemComponent } from './redeem/redeem.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';

const routes: Routes = [
  { path: 'welcome', component: LandingComponent },
  { path: 'request', component: SubmitFormComponent },
  { path: 'redeem', component: RedeemComponent },
  { path: 'redeem/:id', component: RedeemComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
