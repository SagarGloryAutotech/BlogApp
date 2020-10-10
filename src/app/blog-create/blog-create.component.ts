import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  public blogTitle : string;
  public blogBodyHtml : string;
  public blogDescription : string;
  public blogCategory : string;
  public possibleCategory = ["Comedy", "Drama", "Action", "Technology"];

  constructor(private blogHttp: BlogHttpService, private _route: ActivatedRoute, private router: Router) {  
  }

  ngOnInit(): void {
  }

  //Function
  public createBlog(): any{
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    }

    console.log(blogData);
    console.log(this.possibleCategory);

    this.blogHttp.createBlog(blogData).subscribe(
      data =>{
        console.log('Blog Created!');
        alert('Blog posted successfully!');
        console.log(data);
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId]);
        }, 1000)
      },
      error=>{
        console.log('Error occured while creating blog');
        console.log(error.errorMessage);
        alert('Some error occured');
        
      }
    )
  }

}
