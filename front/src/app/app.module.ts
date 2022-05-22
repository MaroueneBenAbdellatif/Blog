import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultationBlogsComponent } from './consultation-blogs/consultation-blogs.component';
import { AddConsultBlogComponent } from './add-consult-blog/add-consult-blog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConsultationBlogsComponent,
    AddConsultBlogComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
