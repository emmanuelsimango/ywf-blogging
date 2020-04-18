import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DocumentReference, DocumentChangeAction } from '@angular/fire/firestore/interfaces';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private collectionName:string = 'blog-posts';
  public selectedBlog:BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private firestore: AngularFirestore) { }

  public getAllBlogs():Observable<DocumentChangeAction<unknown>[]>{
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  public addBlog(data):Promise<DocumentReference>{
    return this.firestore.collection(this.collectionName).add(data);
  }

  public deleteBlog(id){
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }

  public updateBlog(data){
    return this.firestore.collection(this.collectionName).doc(data.id).update(data);
  }

  public getBlogById(id){
    return this.firestore.collection(this.collectionName).doc(id).snapshotChanges();
  }

}
