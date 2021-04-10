import { Message } from '../../../../Models/Message';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent implements OnInit {
  id?:number;
  message?:Message;

  constructor(private store:Store<State>,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
       this.id = +params.id;
       console.log(this.id);

    })


}

}
