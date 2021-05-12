import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Message } from '../Models/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  constructor(private http:HttpClient) { }

  sendMessage(message:Message){
    const BASE_URL = "http://localhost:5000";


    return this.http.post<Message>(`${BASE_URL}/message/send`,message);
  }

  getMessages(){
    const BASE_URL = "http://localhost:5000";
    return this.http.get<Message>(`${BASE_URL}/message/get-messages`);

  }


}
