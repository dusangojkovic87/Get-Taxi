import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscribe } from '../Models/Subscribe';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  BASE_URL = "http://localhost:5000";

  constructor(private http:HttpClient) { }

  subscribeEmail(email:Subscribe){
    return this.http.post<Subscribe>(`${this.BASE_URL}/subscribe/email`,email);

  }
}
