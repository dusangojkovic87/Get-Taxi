import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOAD_BLOGS } from 'src/app/actions/blog.actions';
import { Blog } from 'src/app/Models/Blog';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs:Blog[] = [];
  p:number = 1;

  constructor(private store:Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(new LOAD_BLOGS());
    this.store.select(state => state.blogState).subscribe(data =>{
      this.blogs = data.blogs;
      console.log("blogs",this.blogs);

    })

  }

}
