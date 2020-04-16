import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Youth Wisdom Foundation';
  ngOnInit(){
    AOS.init({
      duration:2000
    });
   }

}
