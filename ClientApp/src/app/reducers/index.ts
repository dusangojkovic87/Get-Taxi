import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { authreducer, AuthState } from './auth.reducer';


export interface State {
  authState:AuthState

}

export const reducers: ActionReducerMap<State,any> = {
  authState:authreducer

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
