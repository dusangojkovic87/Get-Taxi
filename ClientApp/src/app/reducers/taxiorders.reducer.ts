import { Action } from '@ngrx/store';
import { TaxiOrdersActions, TaxiOrdersActionTypes } from '../actions/taxiorders.actions';


export const taxiordersFeatureKey = 'taxiorders';

export interface TaxiOrdersState {
  taxiOrders:any;
  errorMessage:boolean;

}

export const initialState: TaxiOrdersState = {
  taxiOrders:null,
  errorMessage:false

};

export function taxiordersreducer(state = initialState, action: TaxiOrdersActions): TaxiOrdersState {
  switch (action.type) {
    case TaxiOrdersActionTypes.GET_ORDERS_SUCCESS: {
      return {
        ...state,
        taxiOrders:action.payload,
        errorMessage:false
    }

    }

    case TaxiOrdersActionTypes.GET_ORDERS_FAIL: {
      return {
        ...state,
        taxiOrders:null,
        errorMessage:true
    }
    }

    default:
      return state;
  }
}
