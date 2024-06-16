import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  // {path:'home',canActivate:[AuthGuard], component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'register',component:RegisterComponent},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
