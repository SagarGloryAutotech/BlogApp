import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs-compat/add/operator/do';
import 'rxjs-compat/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authKey = 'ZThlMjEwMWQwYjExMTVjMjZlZmM0ZjU1YTcyMGZkOGI3Yjc5OGY4ZDQzYTk1MDNkMjM3MThjZmNlNjdmNDMyZTkzMzJkMDUzNGZiMGIxZmRlNDkxZjJlNTM2MzJiY2ZiNjkzYmU4OTkxMThlNGU5NTg2ZTFiNjg2NTliYTFmNDI0ZTFi';
  
  constructor( private _http : HttpClient ) { 
    console.log("From httpService..");
  }

  private handleError(err: HttpErrorResponse){
    console.log('Handle error Http calls');
    console.log(err.message);
    return Observable.throw(err.message)
  }

  public getAllBlogs(): any{
    //return this.allBlogs
    let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.authKey);
    console.log(myResponse);
    return myResponse;
  }

  public getSingleBlogInformation(currentBlogId): any {
    let myResponse = this._http.get(this.baseUrl+'/view/'+currentBlogId+'?authToken='+this.authKey);
    console.log(myResponse);
    return myResponse;
 }

 public createBlog(blogData): any{
  let myResponse = this._http.post(this.baseUrl+'/create?authToken='+this.authKey, blogData);
  console.log(myResponse);
  return myResponse;
 }

 public editBlog(blogId, blogData): any{
  let myResponse = this._http.put(this.baseUrl+'/'+blogId+'/edit?authToken='+this.authKey,blogData);
  console.log(myResponse);
  return myResponse;
 }

 public deleteBlog(blogId): any{
  let data = {}
  let myResponse = this._http.post(this.baseUrl+'/'+blogId+'/delete?authToken='+this.authKey,data);
  console.log(myResponse);
  return myResponse;
 }
}
