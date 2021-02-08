import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { AuthActionTypes, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS} from '../actions/auth.actions';
import {catchError, map, mergeMap, switchMap, tap} from "rxjs/operators";
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';



@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,private AuthServise:AuthService,private router:Router) {}

  @Effect()
  LogIn:Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action:LOGIN) => action.payload),
    switchMap(payload =>{
      return this.AuthServise.login(payload.Email,payload.Password).pipe(
        map((user) =>{
          console.log(user);

         return new LOGIN_SUCCESS(user);
        }),
        catchError(err =>{
          console.log(err);

          return of(new LOGIN_FAIL({error:err}))
        })
      )
    })

  )

  @Effect({dispatch:false})
  LoginSuccess:Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user:any) =>{
      localStorage.setItem("token",user.payload.token);
      this.router.navigate([""]);
    })
  )

  @Effect({dispatch:false})
  Logout:Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap(() =>{
      console.log("LOGGED");
      localStorage.removeItem("token");
      this.router.navigate(["/login"]);
    })
  )


}





