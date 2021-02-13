import { Action } from '@ngrx/store';
import { Message } from '../Models/Message';

export enum MessageActionTypes {
  SEND_MESSAGE = '[Message] SEND_MESSAGE',
  SEND_SUCCESS = "[Message] SEND_SUCCESS",
  SEND_FAIL = "[Message] SEND_FAIL"
}

export class SEND_MESSAGE implements Action {
  readonly type = MessageActionTypes.SEND_MESSAGE;
  constructor(public payload:Message){}
}

export class SEND_SUCCESS implements Action {
  readonly type = MessageActionTypes.SEND_SUCCESS;
  constructor(public payload:any){}

}

export class SEND_FAIL implements Action {
  readonly type = MessageActionTypes.SEND_FAIL
  constructor(public payload:any){}

}


export type MessageActions = SEND_MESSAGE | SEND_SUCCESS | SEND_FAIL;
