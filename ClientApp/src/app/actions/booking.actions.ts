import {Action} from "@ngrx/store";
import { TaxiOrder } from "../Models/TaxiOrder";

export enum BookingActionTypes{
  BOOK_TAXI = "[Booking] BOOK_TAXI",
  BOOKED_SUCCESS = "[Booking] BOOKED_SUCCESS",
  BOOKING_FAIL = "[Booking] BOOKING_FAIL"

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

export type BookingActions = BOOK_TAXI | BOOKED_SUCCESS | BOOKING_FAIL;
