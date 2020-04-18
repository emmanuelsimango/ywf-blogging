import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  allBlogs=[];
  constructor(private blogs:BlogService, private router:Router) { 
    blogs.getAllBlogs().subscribe(data=>{
      this.allBlogs=data;
    });
  }

  ngOnInit(): void {
  }
  
  readMore(item){
    //console.log(item.payload.doc.data());
    this.blogs.selectedBlog.next(item);
    this.router.navigateByUrl('/blog-one');
  }

}