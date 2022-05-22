import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConsultationBlogsComponent} from "./consultation-blogs/consultation-blogs.component";
import {AddConsultBlogComponent} from "./add-consult-blog/add-consult-blog.component";

const routes: Routes = [
  {
  path: '', component: ConsultationBlogsComponent,
  },
  {
    path: 'addConsultBlog', component: AddConsultBlogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
