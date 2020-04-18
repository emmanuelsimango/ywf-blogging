import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit {

  blogList;
  constructor(private blogService:BlogService,private router:Router) {
    blogService.getAllBlogs().subscribe(data=>{
      this.blogList=data;
    });
    this.blogService.selectedBlog.next(null);
   }

  ngOnInit(): void {
  }

  delete(item){
    if(confirm('Are you sure you want to delete  '+item.payload.doc.data().title+"?")){
      this.blogService.deleteBlog(item.payload.doc.id);
    }
  }

  edit(item){
    this.blogService.selectedBlog.next(item);
    this.router.navigateByUrl('/admin/admin-create-blog');
  }

}
