import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { GET_BLOG_DETAILS } from 'src/app/actions/blog.actions';
import { Blog } from 'src/app/Models/Blog';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  id?: number;
  blogDetails: any;

  constructor(private store: Store<State>, private route: ActivatedRoute) {}

   ngOnInit(): void {
     this.route.params.subscribe((params:Params) =>{
       this.id = +params.id;
       this.store.dispatch(new GET_BLOG_DETAILS(this.id));
       this.store.select(state => state.blogState.blogDetails).subscribe(data =>{
         console.log("details",data);

       })
     })


  }


  }




