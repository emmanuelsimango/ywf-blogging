import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { PathFindersComponent } from './pages/path-finders/path-finders.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogOneComponent } from './pages/blog-one/blog-one.component';


const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'programs',component: ProgramsComponent},
  {path:'finders',component: PathFindersComponent},
  {
    path:'blog',
    component: BlogComponent,
  },
  {
    path: 'blog-one',
    component: BlogOneComponent,
  },
  {
    path:'admin',
    loadChildren: () => import('./pages/admin/admin.module')
      .then(m => m.AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
