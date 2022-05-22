import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {BlogService} from "../Service/blog.service";
import {Blog} from "../Model/blog.module";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-consultation-blogs',
  templateUrl: './consultation-blogs.component.html',
  styleUrls: ['./consultation-blogs.component.css']
})
export class ConsultationBlogsComponent implements OnInit, OnDestroy {
  blogs: Blog[] = [];
  handleError: string;
  searchString: string
  subscriptions: Subscription[] = [];
  constructor(private router: Router , private route: ActivatedRoute , private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }


  navigationConsultationBlog(id: string){
    const navigationExtras: NavigationExtras = {
      state: {
        id: id,
        flag: 'consult',
        blogs: this.blogs
      },
      relativeTo: this.route
    };
    this.router.navigate(['./', 'addConsultBlog'], navigationExtras);
  }


  navigationAddBlog() {
    const navigationExtras: NavigationExtras = {
      state: {
        flag: 'create'
      },
      relativeTo: this.route
    };
    this.router.navigate(['./', 'addConsultBlog'], navigationExtras);
  }
  getBlogs() {
    this.subscriptions.push(this.blogService.getBlogs().subscribe((data: Blog[]) => {
        this.blogs = data;
    }, error => {
      this.handleError = 'Http failure response';
    }));
  }
  vote(blog: Blog , voteType: string) {
    if(voteType === 'Upvote') {
      blog.upvote +=1;
    } else{
      blog.downvote +=1;
    }
    this.subscriptions.push(this.blogService.updateVote(blog).subscribe( data => {
    }, error => {
      this.handleError = 'Http failure response';
    }));

}
  ngOnDestroy(): void {
    if (this.subscriptions.length > 0) {
      this.subscriptions.forEach(s => {
        s.unsubscribe();
      });
    }
  }
}
