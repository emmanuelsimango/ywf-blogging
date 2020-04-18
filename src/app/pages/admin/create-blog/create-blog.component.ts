import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  blog:{title:string, content:string,comments:[],timeCreated,id?,dateUpdated?} = {
    title: '',
    content: '',
    comments:[],
    timeCreated:Date.now(),
  }
  constructor(private blogService:BlogService,private router: Router,) { 
    blogService.selectedBlog.subscribe(data=>{
      if(data){
        this.blog=data.payload.doc.data();
        this.blog.id = data.payload.doc.id;
      }
    })
  }

  ngOnInit(): void {
  }

  save(){
    ///put loader here
    if(this.blog.id){
      this.blog.dateUpdated = Date.now();
      this.blogService.updateBlog(this.blog).then(data=>{
        //stop it in here

        alert('done');
        this.router.navigateByUrl('/admin/admin-blog');
      });
    }else{
      this.blog.timeCreated = Date.now();
      this.blogService.addBlog(this.blog).then(data=>{
        //stop it in here

        alert('done');
        this.router.navigateByUrl('/admin/admin-blog');
      });
    }
    
  }

}
