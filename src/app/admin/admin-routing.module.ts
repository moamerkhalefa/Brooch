import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/layout/admin.component';
import { InformationPanelComponent } from './components/information-panel/information-panel.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { RealEstateComponent } from './components/real-estate/real-estate.component';
import { TechnicalSupportComponent } from './components/technical-support/technical-support.component';

const routes: Routes = [
  { path: '',
    children:[
      { path:"", redirectTo:"tasks",pathMatch:"full" },
      {path:'tasks',component:TasksComponent},
      {path:'realEstate',component:RealEstateComponent},
      {path:'informationPanel',component:InformationPanelComponent},
      {path:'technicalSupport',component:TechnicalSupportComponent},

    ],
    component: AdminComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
