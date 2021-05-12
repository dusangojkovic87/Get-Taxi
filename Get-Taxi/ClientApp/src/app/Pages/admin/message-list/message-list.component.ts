import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GET_MESSAGES } from 'src/app/actions/message.actions';
import { Message } from 'src/app/Models/Message';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  Allmessages?:Message[] = [];

  constructor(private store:Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(new GET_MESSAGES());
    this.store.select(state => state.messageState).subscribe(data=>{
      this.Allmessages = data.AllMessages;

    })

  }

}
