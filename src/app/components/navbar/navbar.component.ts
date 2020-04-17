import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/security/auth.service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user:User;

  constructor(public authService: AuthService, public router: Router,) {
    this.authService.afAuth.authState.subscribe(data=>{
      this.user = data;
      if(data){
        this.router.navigate(['/admin/dashboard']);
      }
    });
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.SignOut();
  }
}
