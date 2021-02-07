import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[Auth] LOGIN',
  LOGINSUCCESS = "[Auth] SUCCESS",
  LOGINFAIL = "[Auth] FAIL"

}

export class LOGIN implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: { Email:string,Password:string }) { }
}

export class LOGINSUCCESS implements Action {
  readonly type = AuthActionTypes.LOGINSUCCESS;
  constructor(public payload: any) {}
}

export class LOGINFAIL implements Action {
  readonly type = AuthActionTypes.LOGINFAIL;
  constructor(error:any){}
}

export type AuthActions = LOGIN | LOGINSUCCESS | LOGINFAIL;

