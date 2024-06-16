import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { InformationPanelComponent } from './information-panel/information-panel.component';
import { TechnicalSupportComponent } from './technical-support/technical-support.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './homes/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'tasks',component:TasksComponent},
  {path:'realEstate',component:RealEstateComponent},
  {path:'informationPanel',component:InformationPanelComponent},
  {path:'technicalSupport',component:TechnicalSupportComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'navbar',component:NavbarComponent},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
