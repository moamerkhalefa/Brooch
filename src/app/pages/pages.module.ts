import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationPanelComponent } from './information-panel/information-panel.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { TasksComponent } from './tasks/tasks.component';
import { TechnicalSupportComponent } from './technical-support/technical-support.component';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { RealDetailsComponent } from './real-details/real-details.component';

@NgModule({
  declarations: [
    InformationPanelComponent,
    RealEstateComponent,
    TasksComponent,
    TechnicalSupportComponent,
    RealDetailsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    ButtonModule
  ]
})
export class PagesModule { }
