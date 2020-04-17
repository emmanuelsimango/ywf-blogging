import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from 'src/app/service/security/auth.guard';


const routes: Routes = [
  {
    path: '',
    component:LoginComponent,
  },
  {
    path: 'login',
    component:LoginComponent,
  },
  {
    path: 'register',
    component: SignUpComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'admin-blog',
    component: AdminBlogComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
