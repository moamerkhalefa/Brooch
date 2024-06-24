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
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent,
    InformationPanelComponent,
    RealEstateComponent,
    TasksComponent,
    TechnicalSupportComponent,
    RealDetailsComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    ButtonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
