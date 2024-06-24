import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedComponent } from './authorized.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '',children:[
    { path:"", redirectTo:"login",pathMatch:"full" },
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'forgotPassword', component:ForgotPasswordComponent},
  ], component: AuthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizedRoutingModule { }
