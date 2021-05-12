import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxiordersService {
  BASE_URL = "http://localhost:5000";

  constructor(private http:HttpClient) { }

  getTaxiOrders(){
    return this.http.get(`${this.BASE_URL}/admin/get-taxi-orders`);
  }
}
