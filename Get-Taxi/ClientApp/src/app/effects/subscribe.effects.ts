import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  SubscribeActionTypes,
  SUBSCRIBE_EMAIL,
  SUBSCRIBE_FAIL,
  SUBSCRIBE_SUCCESS,
} from '../actions/subscribe.actions';
import { SubscribeService } from '../Services/subscribe.service';

@Injectable()
export class SubscribeEffects {
  constructor(
    private actions$: Actions,
    private subscribeServise: SubscribeService
  ) {}

  @Effect()
  SubscribeEmail: Observable<any> = this.actions$.pipe(
    ofType(SubscribeActionTypes.SUBRSCRIBE_EMAIL),
    map((action: SUBSCRIBE_EMAIL) => action.payload),
    switchMap((payload) => {
      return this.subscribeServise.subscribeEmail(payload).pipe(
        map((success) => {
          console.log(success);
          return new SUBSCRIBE_SUCCESS(success);
        }),
        catchError((err) => {
          console.log(err);
          return of(new SUBSCRIBE_FAIL(err));
        })
      );
    })
  );
}
