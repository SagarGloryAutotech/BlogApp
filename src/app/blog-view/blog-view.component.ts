import { ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit  } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {

  public currentBlog;
  constructor(private _route: ActivatedRoute, private router: Router, public blogService: BlogHttpService, private location: Location) { }
  
  ngOnInit(): void {
    let myBlogId =  this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.currentBlog = this.blogService.getSingleBlogInformation(myBlogId).subscribe(
      data=>{
        this.currentBlog = data["data"];
      },
      error=>{
        console.log(error.errorMessage);
      }
    )
  }

  public deleteThisBlog(): any{
    this.blogService.deleteBlog(this.currentBlog.blogId).subscribe(
      data => {
        console.log(data);
        alert("Blog Deleted successfully!");
        setTimeout(() =>{
          this.router.navigate(['/home']);
        },1000)
      },
      error => {
        alert(error.message);
      }
    )
  }

  public goBack(): any{
    this.location.back();
  }
}
