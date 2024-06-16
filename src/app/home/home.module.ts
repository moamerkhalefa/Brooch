import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { InformationPanelComponent } from './information-panel/information-panel.component';
import { TechnicalSupportComponent } from './technical-support/technical-support.component';
import { HomeComponent } from './homes/home.component';
import { SharedModule } from './shared/shared.module';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    HomeComponent,
    TasksComponent,
    RealEstateComponent,
    InformationPanelComponent,
    TechnicalSupportComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TableModule,
    TagModule,
    ButtonModule
  ]
})
export class HomeModule { }
