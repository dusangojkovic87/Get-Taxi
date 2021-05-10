import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/User';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = "http://localhost:5000";

  constructor(private http:HttpClient) { }

  getToken(){
    let token = localStorage.getItem("token");
    if(token != null){
      return token;
    }else{
      return "";
    }
    }


  login(email:string,password:string):Observable<any>{
    const url = `${this.BASE_URL}/authentication/login`;
    return this.http.post(url,{email,password});
  }

  register(userData:User){
    const url = `${this.BASE_URL}/authentication/register`;
    return this.http.post<User>(url,userData);
  }

  decodeToken(token:any){
   let decodedToken = jwt_decode(token);
   return decodedToken;
  }

}
