import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, AdminBlogComponent, ForgotPasswordComponent, SignUpComponent, DashboardComponent, ListUsersComponent, CreateBlogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class AdminModule { }
