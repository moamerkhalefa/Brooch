import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { InformationPanelComponent } from './information-panel/information-panel.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { TechnicalSupportComponent } from './technical-support/technical-support.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {
        path:"",
        redirectTo:"/dashboard",
        pathMatch:"full"
      },
      {path:'dashboard',component:TasksComponent},
      {path:'informationPanel',component:InformationPanelComponent},
      {path:'realEstate',component:RealEstateComponent},
      {path:'technicalSupport',component:TechnicalSupportComponent},
    ],
    component:LayoutComponent,
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
