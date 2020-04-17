import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  count=0;
  constructor(private blogs:BlogService) {
    blogs.getAllBlogs().subscribe(wow=>{
      console.log(wow.length);
      console.log(wow);
      
    })
   }

  ngOnInit(): void {
  }

}
