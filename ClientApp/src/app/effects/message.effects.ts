import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  MessageActionTypes,
  SEND_FAIL,
  SEND_MESSAGE,
  SEND_SUCCESS,
} from '../actions/message.actions';
import { MessageService } from '../Services/message.service';

@Injectable()
export class MessageEffects {
  constructor(
    private actions$: Actions,
    private messageServise: MessageService
  ) {}

  @Effect()
  SendMessage: Observable<any> = this.actions$.pipe(
    ofType(MessageActionTypes.SEND_MESSAGE),
    map((action: SEND_MESSAGE) => action.payload),
    switchMap((payload) => {
      return (
        this.messageServise.sendMessage(payload).pipe(
          map((payload) => {
            console.log(payload);
            return new SEND_MESSAGE(payload);
          }),
          catchError((err) => {
            console.log(err);
            return of(new SEND_FAIL({ error: err }));
          })
        ));
      })
     );
  }




