import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/Models/Blog';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  @Input() blog?:Blog;

  constructor() { }

  ngOnInit(): void {
  }

}
