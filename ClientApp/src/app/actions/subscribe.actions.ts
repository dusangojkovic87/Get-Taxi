import { Action } from '@ngrx/store';
import { Subscribe } from '../Models/Subscribe';

export enum SubscribeActionTypes {
  SUBRSCRIBE_EMAIL = '[Subscribe] SUBSCRIBE_EMAIL',
  SUBSCRIBE_SUCCESS = '[Subscribe] SUBSCRIBE_SUCCESS',
  SUBSCRIBE_FAIL = '[Subscribe] SUBSCRIBE_FAIL',
  DEFAULT_SUB_STATE = '[Subscribe] DEFAULT_SUB_STATE',
}

export class SUBSCRIBE_EMAIL implements Action {
  readonly type = SubscribeActionTypes.SUBRSCRIBE_EMAIL;
  constructor(public payload: Subscribe) {}
}
export class SUBSCRIBE_SUCCESS implements Action {
  readonly type = SubscribeActionTypes.SUBSCRIBE_SUCCESS;
  constructor(public payload: any) {}
}

export class SUBSCRIBE_FAIL implements Action {
  readonly type = SubscribeActionTypes.SUBSCRIBE_FAIL;
  constructor(public payload: any) {}
}

export class DEFAULT_SUB_STATE implements Action {
  readonly type = SubscribeActionTypes.DEFAULT_SUB_STATE;
}

export type SubscribeActions =
  | SUBSCRIBE_EMAIL
  | SUBSCRIBE_SUCCESS
  | SUBSCRIBE_FAIL
  | DEFAULT_SUB_STATE;
