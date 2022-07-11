import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LoginButtonComponent } from './login-button/login-button.component';
import { SignInButtonComponent } from './sign-in-button/sign-in-button.component';
import { WithoutLoginButtonComponent } from './without-login-button/without-login-button.component';
import { LoginDataFormComponent } from './login-data-form/login-data-form.component';


@NgModule({
  declarations: [
    LoginButtonComponent,
    SignInButtonComponent,
    WithoutLoginButtonComponent,
    LoginDataFormComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
