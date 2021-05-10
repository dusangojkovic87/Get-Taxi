import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GET_BLOG_DETAILS } from 'src/app/actions/blog.actions';
import { Blog } from 'src/app/Models/Blog';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit,OnDestroy {
  id?: number;
  blogDetails?:Blog;
  Sub?:Subscription;

  constructor(private store: Store<State>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.store.dispatch(new GET_BLOG_DETAILS(this.id));
      this.Sub = this.store
        .select((state) => state.blogState.blogDetails)
        .subscribe((data) => {
          this.blogDetails = data;
        });
    });
  }

  ngOnDestroy(){
    this.Sub?.unsubscribe();
  }



}
