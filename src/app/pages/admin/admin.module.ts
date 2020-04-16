import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [LoginComponent, AdminBlogComponent, ForgotPasswordComponent, SignUpComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule
  ]
})
export class AdminModule { }
