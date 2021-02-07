import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { AuthActionTypes, LOGIN, LOGINFAIL, LOGINSUCCESS } from '../actions/auth.actions';
import {catchError, map, mergeMap, switchMap, tap} from "rxjs/operators";
import { AuthService } from '../Services/auth.service';



@Injectable()
export class AuthEffects {



  constructor(private actions$: Actions,private AuthServise:AuthService) {}

  @Effect()
  LogIn:Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action:LOGIN) => action.payload),
    switchMap(payload =>{
      return this.AuthServise.login(payload.Email,payload.Password).pipe(
        map((user) =>{
          console.log(user);
         return new LOGINSUCCESS(user);
        }),
        catchError(err =>{
          console.log(err);

          return of(new LOGINFAIL({error:err}))
        })
      )
    })

  )

  @Effect({dispatch:false})
  LoginSuccess:Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGINSUCCESS),
    tap((user:any) =>{
      localStorage.setItem("token",user.payload.token);
    })
  )


}





