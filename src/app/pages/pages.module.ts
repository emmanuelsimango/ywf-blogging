import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ProgramsComponent } from './programs/programs.component';
import { PathFindersComponent } from './path-finders/path-finders.component';



@NgModule({
  declarations: [HomeComponent, ProgramsComponent, PathFindersComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
