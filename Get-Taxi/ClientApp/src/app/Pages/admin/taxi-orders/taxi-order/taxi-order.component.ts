import { Component, Input, OnInit } from '@angular/core';
import { TaxiOrder } from 'src/app/Models/TaxiOrder';

@Component({
  selector: 'app-taxi-order',
  templateUrl: './taxi-order.component.html',
  styleUrls: ['./taxi-order.component.css']
})
export class TaxiOrderComponent implements OnInit {
  @Input() taxiOrder?:TaxiOrder;

  constructor() { }

  ngOnInit(): void {
  }

}
