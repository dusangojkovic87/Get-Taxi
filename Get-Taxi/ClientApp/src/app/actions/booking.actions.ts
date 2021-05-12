import {Action} from "@ngrx/store";
import { TaxiOrder } from "../Models/TaxiOrder";

export enum BookingActionTypes{
  BOOK_TAXI = "[Booking] BOOK_TAXI",
  BOOKED_SUCCESS = "[Booking] BOOKED_SUCCESS",
  BOOKING_FAIL = "[Booking] BOOKING_FAIL",
  BOOKING_DEFAULT_STATE = "[Booking] BOOKING_DEFAULT_STATE"

}

export class BOOK_TAXI implements Action{
  readonly type = BookingActionTypes.BOOK_TAXI;

  constructor(public payload:TaxiOrder){}
}

export class BOOKED_SUCCESS implements Action{
  readonly type = BookingActionTypes.BOOKED_SUCCESS;
  constructor(public payload:any){}

}

export class BOOKING_FAIL implements Action{
  readonly type = BookingActionTypes.BOOKING_FAIL;
  constructor(public payload:any){}

}

export class BOOKING_DEFAULT_STATE implements Action{
  readonly type = BookingActionTypes.BOOKING_DEFAULT_STATE;

}

export type BookingActions = BOOK_TAXI | BOOKED_SUCCESS | BOOKING_FAIL | BOOKING_DEFAULT_STATE;
