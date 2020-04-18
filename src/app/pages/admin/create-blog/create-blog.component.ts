import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  blog:{title:string, content:string,comments:[],timeCreated} = {
    title: '',
    content: '',
    comments:[],
    timeCreated:Date.now(),
  }
  constructor(private blogService:BlogService,private router: Router,) { 
    blogService.selectedBlog.subscribe(data=>{
      if(data){
        this.blog.title=data.payload.doc.data().title;
      }
    })
  }

  ngOnInit(): void {
  }

  save(){
    ///put loader here
    this.blog.timeCreated = Date.now();
    this.blogService.addBlog(this.blog).then(data=>{
      //stop it in here

      alert('done');
      this.router.navigateByUrl('/admin/admin-blog');
    });
  }

}
