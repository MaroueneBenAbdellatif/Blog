import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Blog} from "../Model/blog.module";



@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl = environment.blogUrl;
  constructor(private http: HttpClient) { }

  getBlogs() {
    return this.http.get(this.baseUrl);
  }
  addBlogs(blog: Blog) {
    return this.http.post(this.baseUrl , blog);
  }
  updateVote(blog: Blog) {
    return this.http.put(this.baseUrl , blog);
  }
  getBlogById(id: string) {
    return this.http.get(this.baseUrl + id );
  }

}
