import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { InternalServerError500Component } from './components/internal-server-error500/internal-server-error500.component';

const routes: Routes = [
  { path: 'not-found', component: NotFound404Component },
  { path: 'internal-server-error', component: InternalServerError500Component }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }
