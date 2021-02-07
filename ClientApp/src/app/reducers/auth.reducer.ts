import { Action } from '@ngrx/store';
import { Actions } from '@ngrx/store-devtools/src/reducer';
import { AuthActions, AuthActionTypes, LOGINSUCCESS } from '../actions/auth.actions';
import { User } from '../Models/User';


export const authFeatureKey = 'auth';

export interface AuthState {
  isAuthenticated:boolean;
  user: User | null,
  errorMessage?:any


}

export const initialState: AuthState = {
  isAuthenticated:false,
  user:null,
  errorMessage: null
};

export function authreducer(state = initialState, action:AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGINSUCCESS:{
      return {
        ...state,
        isAuthenticated:true,
        user:{
          token:action.payload.token
        },
        errorMessage:null
      }
    }
    case AuthActionTypes.LOGINFAIL:{
      return {
        ...state,errorMessage:"LOGIN FAILED!"
      }
    }

    default:
      return state;
  }
}
