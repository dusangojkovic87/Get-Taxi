import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { authreducer, AuthState } from './auth.reducer';
import { bookingreducer, BookingState } from './book.reducer';
import { messagereducer, MessageState } from './message.reducer';


export interface State {
  authState:AuthState,
  bookingState:BookingState,
  messageState:MessageState

}

export const reducers: ActionReducerMap<State,any> = {
  authState:authreducer,
  bookingState:bookingreducer,
  messageState:messagereducer

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
