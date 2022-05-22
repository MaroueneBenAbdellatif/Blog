import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BlogService} from "../Service/blog.service";
import {Subscription} from "rxjs";
import {Blog} from "../Model/blog.module";

@Component({
  selector: 'app-add-consult-blog',
  templateUrl: './add-consult-blog.component.html',
  styleUrls: ['./add-consult-blog.component.css']
})
export class AddConsultBlogComponent implements OnInit, OnDestroy {
  id: string;
  handleError: string;
  submited: boolean = false;
  blogForm: FormGroup ;
  blog: Blog;
  subscriptions: Subscription[] = [];
  flag: string;
  blogs: Blog[] = [];
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,private router: Router, private blogService: BlogService) {
    const  navigation = this.router.getCurrentNavigation();
    if (navigation.extras?.state) {
      const state = navigation.extras.state as {
        id: string,
        flag: string,
        blogs: Blog[],
      };
      this.id = state.id;
      this.flag = state.flag;
      this.blogs = state.blogs;
    } else {
      this.router.navigate(['../'], {relativeTo: this.route});
    }
  }

  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      _id: [null],
      title: [null ,Validators.required],
      content: [null ,Validators.required],
      author: [null, Validators.required],
      upvote: [null],
      downvote: [null],
    });
      if (this.flag === 'consult') {
        this.subscriptions.push(this.blogService.getBlogById(this.id).subscribe(data =>{
           this.blogForm.patchValue(data);
         }));
      }
  }
  AddBlog() {
    this.submited = true;
    if(this.blogForm.valid) {
      this.blog = this.blogForm.getRawValue() as Blog;
      this.subscriptions.push(this.blogService.addBlogs(this.blog).subscribe(data => {
        this.router.navigate(['../'], {relativeTo: this.route});
      }, error => {
        this.handleError = 'Http failure response';
      }));
    }
  }
  ngOnDestroy(): void {
    if (this.subscriptions.length > 0) {
      this.subscriptions.forEach(s => {
        s.unsubscribe();
      });
    }
  }
  retour() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
