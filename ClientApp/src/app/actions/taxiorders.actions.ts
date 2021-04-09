import { Action } from '@ngrx/store';

export enum TaxiOrdersActionTypes {
  GETORDERS = '[TaxiOrders] GETORDERS',
  GET_ORDERS_FAIL = '[TaxiOrders] GET_ORDERS_FAIL',
  GET_ORDERS_SUCCESS = '[TaxiOrders] GET_ORDERS_SUCCESS',
}

export class GETORDERS implements Action {
  readonly type = TaxiOrdersActionTypes.GETORDERS;
  constructor() {}
}

export class GET_ORDERS_FAIL implements Action {
  readonly type = TaxiOrdersActionTypes.GET_ORDERS_FAIL;
  constructor() {}
}

export class GET_ORDERS_SUCCESS implements Action {
  readonly type = TaxiOrdersActionTypes.GET_ORDERS_SUCCESS;
  constructor(public payload:any) {}
}

export type TaxiOrdersActions = GETORDERS | GET_ORDERS_FAIL | GET_ORDERS_SUCCESS;
