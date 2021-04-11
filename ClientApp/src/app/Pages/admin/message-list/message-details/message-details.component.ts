import { Message } from '../../../../Models/Message';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { State } from 'src/app/reducers';
import { GET_MESSAGES_DETAILS } from 'src/app/actions/message.actions';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css'],
})
export class MessageDetailsComponent implements OnInit {
  id?: number;
  message?: any;

  constructor(private store: Store<State>, private route: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.store.dispatch(new GET_MESSAGES_DETAILS(this.id));
    });

    this.store
      .select((state) => state.messageState)
      .subscribe((data) => {
        if(data.MessageDetails)
           this.message = data.MessageDetails;


      });
  }

  backToMessages(){
    this.router.navigate(["admin/messages"]);
  }
}
