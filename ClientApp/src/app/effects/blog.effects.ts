import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { ADD_BLOG, ADD_BLOG_FAIL, ADD_BLOG_SUCCESS, BlogActionTypes } from '../actions/blog.actions';
import { BlogService } from '../Services/blog.service';



@Injectable()
export class BlogEffects {



  constructor(private actions$: Actions,private http:BlogService) {}

  @Effect()
  AddBlog:Observable<any> = this.actions$.pipe(
    ofType(BlogActionTypes.ADD_BLOG),
    map((data:ADD_BLOG) => data.payload),
    mergeMap((data) =>{
      return this.http.addBlog(data).pipe(
        map(() =>{
          return new ADD_BLOG_SUCCESS();
        }),
      catchError(err =>{
        return of(new ADD_BLOG_FAIL());
      })
      )
    })
  )


}
