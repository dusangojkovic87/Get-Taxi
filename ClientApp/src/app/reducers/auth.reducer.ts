import { Action } from '@ngrx/store';
import { Actions } from '@ngrx/store-devtools/src/reducer';
import { AuthActions, AuthActionTypes } from '../actions/auth.actions';
import { User } from '../Models/User';


export const authFeatureKey = 'auth';

export interface AuthState {
  isAuthenticated:boolean;
  user: User | null,
  errorMessage?:boolean,
  registerSuccess:boolean


}

export const initialState: AuthState = {
  isAuthenticated:false,
  user:null,
  errorMessage: false,
  registerSuccess:false
};

export function authreducer(state = initialState, action:AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:{
      return {
        ...state,
        isAuthenticated:true,
        user:{
          token:action.payload.token
        },
        errorMessage:false
      }
    }
    case AuthActionTypes.LOGIN_FAIL:{
      return {
        ...state,
        errorMessage:true
      }
    }
    case AuthActionTypes.LOGOUT:{
      return {
        ...state,
        isAuthenticated:false,
        user:{
          token:undefined,
        },
        errorMessage:false
      }
    }
    case AuthActionTypes.REGISTER_SUCCESS:{
      return {
        ...state,
        isAuthenticated:false,
        errorMessage:false,
        registerSuccess:true
      }
    }

    case AuthActionTypes.REGISTER_FAIL:{
      return{
        ...state,
        isAuthenticated:false,
        errorMessage:true
      }
    }

    default:
      return state;
  }
}
