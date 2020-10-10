import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],

})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategory = ["Comdey", "Drama", "Action", "Technology"];
  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data["data"];
        console.log(this.currentBlog);
      },
      error => {
        console.log("Some error occured");
        console.log(error.message);
      }
    )
  }

  public editThisBlog(): any{
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      data => {
        alert("Edited Successfully");
        console.log(data["data"]);
        setTimeout(() =>{
          this.router.navigate(['/blog',this.currentBlog.blogId]);
        },1000)
      },error => {
        alert("Error editing blog");
        console.log(error.message);
      }
    )
  }

  

}
