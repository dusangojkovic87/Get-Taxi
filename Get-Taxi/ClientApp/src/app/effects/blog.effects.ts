import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { ADD_BLOG, ADD_BLOG_FAIL, ADD_BLOG_SUCCESS, BlogActionTypes, GET_BLOG_DETAILS, GET_BLOG_DETAILS_FAIL, GET_BLOG_DETAILS_SUCCESS, LOAD_BLOGS_FAIL, LOAD_BLOGS_SUCCESS } from '../actions/blog.actions';
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

  @Effect()
  LoadBlogs:Observable<any> = this.actions$.pipe(
    ofType(BlogActionTypes.LOAD_BLOGS),
    switchMap(() =>{
      return this.http.getBlogs().pipe(
        map((data) =>{
          return new LOAD_BLOGS_SUCCESS(data);
        }),
        catchError(err =>{
          return of(new LOAD_BLOGS_FAIL(err));
        })
      )
    })
  )

  @Effect()
  GetBlogDetails:Observable<any> = this.actions$.pipe(
    ofType(BlogActionTypes.GET_BLOG_DETAILS),
     map((data:GET_BLOG_DETAILS) =>data.payload),
     switchMap((data) =>{
        return this.http.getBlogById(data).pipe(
          map((data) => {
            return new GET_BLOG_DETAILS_SUCCESS(data);
          }),
          catchError(err =>{
            return of(new GET_BLOG_DETAILS_FAIL(err));
          })
        )
     })

  )


}


