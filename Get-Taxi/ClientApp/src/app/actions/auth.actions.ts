import { Action } from '@ngrx/store';
import { User } from '../Models/User';

export enum AuthActionTypes {
  LOGIN = '[Auth] LOGIN',
  LOGIN_SUCCESS = '[Auth] SUCCESS',
  LOGIN_FAIL = '[Auth] FAIL',
  LOGOUT = '[Auth] LOGOUT',
  REGISTER = '[Auth] REGISTER',
  REGISTER_SUCCESS = '[Auth] REGISTER_SUCCESS',
  REGISTER_FAIL = '[Auth] REGISTER_FAIL',
  DEFAULT_STATE = "[Auth] DEFAULT_STATE"
}

export class LOGIN implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: { Email: string; Password: string }) {}
}

export class LOGIN_SUCCESS implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LOGIN_FAIL implements Action {
  readonly type = AuthActionTypes.LOGIN_FAIL;
  constructor(error: any) {}
}

export class LOGOUT implements Action {
  readonly type = AuthActionTypes.LOGOUT;
  constructor() {}
}

export class REGISTER implements Action {
  readonly type = AuthActionTypes.REGISTER;
  constructor(public payload: User) {}
}

export class REGISTER_FAIL implements Action {
  readonly type = AuthActionTypes.REGISTER_FAIL;
}
export class REGISTER_SUCCESS implements Action {
  readonly type = AuthActionTypes.REGISTER_SUCCESS;
}

export class DEFAULT_STATE implements Action {
  readonly type = AuthActionTypes.DEFAULT_STATE
}

export type AuthActions =
  | LOGIN
  | LOGIN_SUCCESS
  | LOGIN_FAIL
  | LOGOUT
  | REGISTER
  | REGISTER_SUCCESS
  | REGISTER_FAIL
  | DEFAULT_STATE;
