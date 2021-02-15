import { Action } from '@ngrx/store';
import {
  SubscribeActions,
  SubscribeActionTypes,
} from '../actions/subscribe.actions';

export const subscribeFeatureKey = 'subscribe';

export interface SubscribeState {
  subscribeSuccess: boolean;
  errorMessage: boolean;
}

export const initialState: SubscribeState = {
  subscribeSuccess: false,
  errorMessage: false,
};

export function subscribereducer(
  state = initialState,
  action: SubscribeActions
): SubscribeState {
  switch (action.type) {
    case SubscribeActionTypes.SUBSCRIBE_SUCCESS: {
      return {
        ...state,
        subscribeSuccess: true,
        errorMessage: false
      };
    }
    case SubscribeActionTypes.SUBSCRIBE_FAIL: {
      return {
        ...state,
        subscribeSuccess: false,
        errorMessage: true
      };
    }
    case SubscribeActionTypes.DEFAULT_SUB_STATE:{
      return{
        ...state,
        subscribeSuccess:false,
        errorMessage:false

      }
    }


    default:
      return state;
  }
}
