import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { SignInButtonComponent } from './sign-in-button/sign-in-button.component';
import { WithoutLoginButtonComponent } from './without-login-button/without-login-button.component';
import { LoginDataFormComponent } from './login-data-form/login-data-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignInButtonComponent,
    WithoutLoginButtonComponent,
    LoginDataFormComponent,
    LandingPageComponent,
  ],
  imports: [CommonModule, LandingRoutingModule, FormsModule],
})
export class LandingModule {}
