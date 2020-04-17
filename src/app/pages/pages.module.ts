import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ProgramsComponent } from './programs/programs.component';
import { PathFindersComponent } from './path-finders/path-finders.component';
import { BlogComponent } from './blog/blog.component';
import { BlogOneComponent } from './blog-one/blog-one.component';



@NgModule({
  declarations: [HomeComponent, ProgramsComponent, PathFindersComponent, BlogComponent, BlogOneComponent],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
