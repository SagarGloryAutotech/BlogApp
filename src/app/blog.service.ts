import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public currentBlog;
  public allBlogs = [
    {
      "blogId": "1",
      "author": "Abc Person",
      "category": "comedy",
      "isPublished": true,
      "bodyHtml": "this is blog body",
      "description": "askcjhaskvsakjb",
      "title": "Blog1 Title",
      "tag": ["Humour"]
    },
    {
      "blogId": "2",
      "author": "Abc Person",
      "category": "comedy",
      "isPublished": true,
      "bodyHtml": "this is blog body",
      "description": "askcjhaskvsakjb",
      "title": "Blog2 Title",
      "tag": []
    },{
      "blogId": "3",
      "author": "Abc Person",
      "category": "comedy",
      "isPublished": true,
      "bodyHtml": "this is blog body",
      "description": "askcjhaskvsakjb",
      "title": "Blog3 Title",
      "tag":[]
    }
  ]

  constructor() {
    console.log("Service constructor called!");
   }

   public getAllBlogs(): any{
     return this.allBlogs
   }

   public getSingleBlogInformation(currentBlogId): any {
    for (let blog of this.allBlogs){
      if(blog.blogId == currentBlogId)
        this.currentBlog = blog;
    }
    return this.currentBlog;
  }
}
