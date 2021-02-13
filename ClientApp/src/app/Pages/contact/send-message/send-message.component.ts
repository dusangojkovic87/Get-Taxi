import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DEFAULT_MESSAGE_STATE, SEND_MESSAGE } from 'src/app/actions/message.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css'],
})
export class SendMessageComponent implements OnInit {
  messageForm: any;
  messageSendSuccess?: boolean;

  constructor(private fb: FormBuilder, private store: Store<State>) {}

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Question: ['', Validators.required],
    });

    this.store
      .select((state) => state.messageState)
      .subscribe((data) => {
        this.messageSendSuccess = data.sendSuccess;
        if(this.messageSendSuccess){
          setTimeout(() =>{
          this.store.dispatch(new DEFAULT_MESSAGE_STATE());
          },3000)
        }
      });
  }

  sendMessage() {
    this.store.dispatch(new SEND_MESSAGE(this.messageForm.value));
    this.messageForm.reset();
  }
}
