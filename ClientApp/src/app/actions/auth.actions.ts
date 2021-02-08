import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[Auth] LOGIN',
  LOGIN_SUCCESS = "[Auth] SUCCESS",
  LOGIN_FAIL = "[Auth] FAIL",
  LOGOUT = "[Auth] LOGOUT"

}

export class LOGIN implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: { Email:string,Password:string }) { }
}

export class LOGIN_SUCCESS implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LOGIN_FAIL implements Action {
  readonly type = AuthActionTypes.LOGIN_FAIL;
  constructor(error:any){}
}

export class LOGOUT implements Action{
  readonly type = AuthActionTypes.LOGOUT;
  constructor(){}
}



export type AuthActions = LOGIN | LOGIN_SUCCESS | LOGIN_FAIL | LOGOUT;

