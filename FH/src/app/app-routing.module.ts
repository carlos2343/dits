import { AdminComponent } from './components/admin/admin.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DonateComponent } from './components/donate/donate.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent},
  {
  path: 'login',
  component: LoginComponent},
  {
  path: 'admin',
  component: AdminComponent},
  {
  path: 'donate',
  component: DonateComponent
  }
 
  
  
  ];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
