import { Action } from '@ngrx/store';
import { Message } from '../Models/Message';

export enum MessageActionTypes {
  SEND_MESSAGE = '[Message] SEND_MESSAGE',
  SEND_SUCCESS = '[Message] SEND_SUCCESS',
  SEND_FAIL = '[Message] SEND_FAIL',
  DEFAULT_MESSAGE_STATE = '[Message] DEFAULT_MESSAGE_STATE',
  GET_MESSAGES = '[Message] GET_MESSAGES',
  GET_MESSAGES_SUCCESS = '[Message] GET_MESSAGES_SUCCESS',
  GET_MESSAGES_FAIL = '[Message] GET_MESSAGE_FAIL'

}

export class SEND_MESSAGE implements Action {
  readonly type = MessageActionTypes.SEND_MESSAGE;
  constructor(public payload: Message) {}
}

export class SEND_SUCCESS implements Action {
  readonly type = MessageActionTypes.SEND_SUCCESS;
  constructor(public payload: any) {}
}

export class SEND_FAIL implements Action {
  readonly type = MessageActionTypes.SEND_FAIL;
  constructor(public payload: any) {}
}

export class GET_MESSAGES implements Action {
  readonly type = MessageActionTypes.GET_MESSAGES;
  constructor() {}
}

export class GET_MESSAGES_SUCCESS implements Action {
  readonly type = MessageActionTypes.GET_MESSAGES_SUCCESS;
  constructor(public payload:any) {}
}

export class GET_MESSAGES_FAIL implements Action {
  readonly type = MessageActionTypes.GET_MESSAGES_FAIL;
  constructor() {}
}



export class DEFAULT_MESSAGE_STATE implements Action {
  readonly type = MessageActionTypes.DEFAULT_MESSAGE_STATE;
}

export type MessageActions =
  | SEND_MESSAGE
  | SEND_SUCCESS
  | SEND_FAIL
  | DEFAULT_MESSAGE_STATE
  | GET_MESSAGES
  | GET_MESSAGES_SUCCESS
  | GET_MESSAGES_FAIL;
