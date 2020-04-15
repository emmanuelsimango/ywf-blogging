import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { ImgTopComponent } from './img-top/img-top.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [NavbarComponent, SliderComponent, EventsComponent, ContactComponent, FooterComponent, ImgTopComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,SliderComponent,EventsComponent,ContactComponent,FooterComponent,ImgTopComponent,HeaderComponent
  ]
})
export class ComponentsModule { }
