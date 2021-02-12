import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  BookingActionTypes,
  BOOKED_SUCCESS,
  BOOK_TAXI,
  BOOKING_FAIL,
} from '../actions/booking.actions';
import { BookingService } from '../Services/booking.service';

@Injectable()
export class BookingEffects {
  constructor(
    private actions$: Actions,
    private bookingServise: BookingService
  ) {}

  @Effect()
  BookTaxi: Observable<any> = this.actions$.pipe(
    ofType(BookingActionTypes.BOOK_TAXI),
    map((taxiOrder: BOOK_TAXI) => taxiOrder.payload),
    switchMap((payload) => {
      return this.bookingServise.bookTaxi(payload).pipe(
        map((success) => {
          console.log(success);
          return new BOOKED_SUCCESS(success);
        }),
        catchError((err) => {
          console.log(err);
          return of(new BOOKING_FAIL({ error: err }));
        })
      );
    })
  );
}
