import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GETORDERS } from 'src/app/actions/taxiorders.actions';
import { State } from 'src/app/reducers';
import { TaxiOrdersState } from 'src/app/reducers/taxiorders.reducer';

@Component({
  selector: 'app-taxi-orders',
  templateUrl: './taxi-orders.component.html',
  styleUrls: ['./taxi-orders.component.css']
})
export class TaxiOrdersComponent implements OnInit {
  taxiOrders:any;

  constructor(private store:Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(new GETORDERS());
    this.store.select(state => state.taxiordersState).subscribe(data =>{
        this.taxiOrders = data.taxiOrders;
        console.log(this.taxiOrders);
    })
  }

}


