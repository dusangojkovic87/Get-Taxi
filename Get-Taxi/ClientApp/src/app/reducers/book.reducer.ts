import { Action } from '@ngrx/store';
import { BookingActions, BookingActionTypes } from '../actions/booking.actions';


export const bookFeatureKey = 'book';

export interface BookingState {
  bookedSucces:boolean;
  errorMessage?:any;


}

export const initialState: BookingState = {
  bookedSucces:false,
  errorMessage:null

};

export function bookingreducer(state = initialState, action: BookingActions): BookingState {
  switch (action.type) {
    case BookingActionTypes.BOOKED_SUCCESS:{
      return{
        ...state,
        bookedSucces:true,
        errorMessage:null
      }
    }
    case BookingActionTypes.BOOKING_FAIL:{
      return {
        ...state,
        bookedSucces:false,
        errorMessage:"Error,booking failed!"
      }
    }
    case BookingActionTypes.BOOKING_DEFAULT_STATE:{
      return {
        ...state,
        bookedSucces:false,
        errorMessage:null
      }
    }

    default:
      return state;
  }
}
