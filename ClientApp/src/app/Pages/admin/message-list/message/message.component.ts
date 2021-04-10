import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/Models/Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message?:Message;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  readMessage(id?:number){
    if(id)
      this.router.navigate(['messages', id]);


  }

}
