import { Pipe, PipeTransform } from '@angular/core';
import {Blog} from "./Model/blog.module";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(blogs: Blog[] , search: string): Blog[] {
    if(!blogs || !search )
      return blogs
    return blogs.filter(blog => blog.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    || blog.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
     blog.author.toLocaleLowerCase().includes(search.toLocaleLowerCase())

    )



  }

}
