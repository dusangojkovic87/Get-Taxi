import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SEND_MESSAGE } from 'src/app/actions/message.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  messageForm:any;

  constructor(private fb:FormBuilder,private store:Store<State>) { }

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      Name:["",Validators.required],
      Email:["",Validators.required],
      Question:["",Validators.required]
    })

  }

  sendMessage(){
    this.store.dispatch(new SEND_MESSAGE(this.messageForm.value));
    this.messageForm.reset();

  }



}
