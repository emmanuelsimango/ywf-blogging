import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog-one',
  templateUrl: './blog-one.component.html',
  styleUrls: ['./blog-one.component.scss']
})
export class BlogOneComponent implements OnInit {

  selectedGuy;
  title='';
  comment:{name:string,details:string,dateCommented} = {name:'',details:'',dateCommented:Date.now()};
  constructor(private blogs:BlogService) {
    blogs.selectedBlog.subscribe(data=>{
      if(data)
      blogs.getBlogById(data.payload.doc.id).subscribe(randukudaChairo=>{
        this.selectedGuy=randukudaChairo.payload.data();
        this.title = this.selectedGuy.title;
        this.selectedGuy.id=data.payload.doc.id;
      });
    });
   }

  ngOnInit(): void {
  }

  submitComment(){
    this.comment.dateCommented=Date.now();
    this.selectedGuy.comments.push(this.comment);

    this.blogs.updateBlog(this.selectedGuy).then(zvaita=>{
      alert('Thank you for your comment');
      this.comment = {
        name:'',
        details:'',
        dateCommented:Date.now()
      };
    });
  }

}
