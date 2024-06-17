import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink, RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    LoadingComponent,


  ]
})
export class SharedModule { }
