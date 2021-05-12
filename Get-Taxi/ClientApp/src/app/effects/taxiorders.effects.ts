import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { GET_ORDERS_FAIL, GET_ORDERS_SUCCESS, TaxiOrdersActionTypes } from '../actions/taxiorders.actions';
import { TaxiordersService } from '../Services/taxiorders.service';


@Injectable()
export class TaxiordersEffects {
  constructor(private actions$: Actions,private taxiOrdersServise:TaxiordersService) {}

  @Effect()
  TaxiOrders:Observable<any> = this.actions$.pipe(
    ofType(TaxiOrdersActionTypes.GETORDERS),
    mergeMap(() => {
      return  this.taxiOrdersServise.getTaxiOrders().pipe(
        map((data) => {
          return new GET_ORDERS_SUCCESS(data);
        }),
        catchError((err) => {
          console.log(err);
          return of(new GET_ORDERS_FAIL());
        })
      );

    })
  );
}

