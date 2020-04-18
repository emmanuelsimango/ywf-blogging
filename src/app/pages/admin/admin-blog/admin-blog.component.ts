import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit {

  blogList;
  constructor(private blogService:BlogService) {
    blogService.getAllBlogs().subscribe(data=>{
      this.blogList=data;
    })
   }

  ngOnInit(): void {
  }

}
