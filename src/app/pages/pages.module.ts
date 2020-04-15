import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ProgramsComponent } from './programs/programs.component';
import { PathFindersComponent } from './path-finders/path-finders.component';
import { BlogComponent } from './blog/blog.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment.prod';


@NgModule({
  declarations: [HomeComponent, ProgramsComponent, PathFindersComponent, BlogComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
