import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = "http://localhost:5000";

  constructor(private http:HttpClient) { }

  getToken(){
    return localStorage.getItem("token");
  }

  login(email:string,password:string):Observable<any>{
    const url = `${this.BASE_URL}/authentication/login`;
    return this.http.post(url,{email,password});
  }


}
