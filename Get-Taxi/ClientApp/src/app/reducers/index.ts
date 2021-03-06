import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { authreducer, AuthState } from './auth.reducer';
import { blogreducer, blogState } from './blog.reducer';
import { bookingreducer, BookingState } from './book.reducer';
import { messagereducer, MessageState } from './message.reducer';
import { subscribereducer, SubscribeState } from './subscribe.reducer';
import { taxiordersreducer, TaxiOrdersState } from './taxiorders.reducer';


export interface State {
  authState:AuthState,
  bookingState:BookingState,
  messageState:MessageState,
  subscribeState:SubscribeState,
  taxiordersState:TaxiOrdersState,
  blogState:blogState

}

export const reducers: ActionReducerMap<State,any> = {
  authState:authreducer,
  bookingState:bookingreducer,
  messageState:messagereducer,
  subscribeState:subscribereducer,
  taxiordersState:taxiordersreducer,
  blogState:blogreducer

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
