import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  allBlogs=[];
  constructor(private blogs:BlogService) { 
    blogs.getAllBlogs().subscribe(data=>{
      this.allBlogs=data;
    });
  }

  ngOnInit(): void {
  }

}
