import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaxiOrder } from '../Models/TaxiOrder';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private BASE_URL = "http://localhost:5000";

  constructor(private http:HttpClient) { }

  bookTaxi(order:TaxiOrder){
    return this.http.post(`${this.BASE_URL}/booking/taxi`,order);
  }
}
