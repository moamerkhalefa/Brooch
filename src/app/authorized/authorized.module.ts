import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizedRoutingModule } from './authorized-routing.module';
import { AuthorizedComponent } from './authorized.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthorizedComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthorizedRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class AuthorizedModule { }
