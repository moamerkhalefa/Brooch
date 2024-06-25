import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './authorized/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    // canActivate: [authGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authorized/authorized.module').then((m) => m.AuthorizedModule),
  },
  {
    path: 'errors',
    loadChildren: () =>
      import('./errors/errors.module').then((m) => m.ErrorsModule),
  },



  { path: '**', redirectTo: 'errors/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
