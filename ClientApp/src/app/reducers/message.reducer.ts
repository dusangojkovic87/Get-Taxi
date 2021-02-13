import { Action } from '@ngrx/store';
import { MessageActions, MessageActionTypes } from '../actions/message.actions';
import { Message } from '../Models/Message';

export const messageFeatureKey = 'message';

export interface MessageState {
  message: Message | null;
  sendSuccess: boolean;
  errorMessage: string | null;
}

export const initialState: MessageState = {
  message: null,
  sendSuccess: false,
  errorMessage: null,
};

export function messagereducer(
  state = initialState,
  action: MessageActions
): MessageState {
  switch (action.type) {
    case MessageActionTypes.SEND_SUCCESS: {
      return {
        ...state,
        message: null,
        sendSuccess: true,
        errorMessage: null,
      };
    }
    case MessageActionTypes.SEND_FAIL: {
      return {
        ...state,
        sendSuccess: false,
        errorMessage: 'sending failed!',
      };
    }

    case MessageActionTypes.DEFAULT_MESSAGE_STATE:{
      return{
        ...state,
        sendSuccess:false,
        errorMessage:null
      }
    }
    default:
      return state;
  }
}
