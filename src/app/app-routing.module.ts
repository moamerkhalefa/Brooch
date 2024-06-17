import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './auth/register/register.component';
import { TechnicalSupportComponent } from './pages/technical-support/technical-support.component';
import { RealEstateComponent } from './pages/real-estate/real-estate.component';
import { InformationPanelComponent } from './pages/information-panel/information-panel.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  {path:'', redirectTo: 'tasks', pathMatch: 'full'},
  // {path:'home',canActivate:[AuthGuard], component: HomeComponent},
  {path:'tasks',component:TasksComponent},
  {path:'informationPanel',component:InformationPanelComponent},
  {path:'realEstate',component:RealEstateComponent},
  {path:'technicalSupport',component:TechnicalSupportComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
