import { Injectable } from '@angular/core';
import { Actions,Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import {
  GET_MESSAGES_FAIL,
  GET_MESSAGES_SUCCESS,
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
            return new SEND_SUCCESS(payload);
          }),
          catchError((err) => {
            console.log(err);
            return of(new SEND_FAIL({ error: err }));
          })
        ));
      })
     );

     @Effect()
     GetMessages:Observable<any> = this.actions$.pipe(
       ofType(MessageActionTypes.GET_MESSAGES),
       mergeMap(() =>{
        return  this.messageServise.getMessages().pipe(
          map((data) => {
            return new GET_MESSAGES_SUCCESS(data);
          }),
          catchError((err) => {
            console.log(err);
            return of(new GET_MESSAGES_FAIL());
          })
        );

      })
    );


  }







