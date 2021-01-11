import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RedeemComponent } from './redeem/redeem.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SubmitFormComponent,
    DashboardComponent,
    RedeemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
