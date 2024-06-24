import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { InternalServerError500Component } from './components/internal-server-error500/internal-server-error500.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    InternalServerError500Component,
    NotFound404Component
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule,
    SharedModule
  ]
})
export class ErrorsModule { }
