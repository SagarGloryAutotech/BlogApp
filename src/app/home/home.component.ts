import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [BlogService, BlogHttpService]
})
export class HomeComponent implements OnInit, OnDestroy {
  
  public allBlogs =[];
  constructor(public blogService: BlogService, public bloghttp: BlogHttpService) { 
    console.log("Home constructor called");
  }
  ngOnDestroy(): void {
    console.log("Home Component destroyed");
  }

  ngOnInit(): void {
    console.log("OnInit called from home");
    //this.allBlogs = this.bloghttp.getAllBlogs();
    //console.log(this.allBlogs);
    //console.log(this.bloghttp.getAllBlogs());
    this.allBlogs = this.bloghttp.getAllBlogs().subscribe(
      data =>{
        console.log(data);
        this.allBlogs = data["data"]
      },
      error =>{
        console.log("Error Occured");
        console.log(error.errorMessage);
      }
    )
    console.log(this.allBlogs);
  }

}
