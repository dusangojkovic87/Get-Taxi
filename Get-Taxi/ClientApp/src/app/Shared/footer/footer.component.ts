import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DEFAULT_SUB_STATE, SUBSCRIBE_EMAIL } from 'src/app/actions/subscribe.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  emailForm:any;
  subscribed?:boolean;
  errorMessage?:boolean;

  constructor(private fb:FormBuilder,private store:Store<State>) { }

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      Email:["",[Validators.required,Validators.email]]
    })

    this.store.select(state => state.subscribeState).subscribe(data =>{
      this.subscribed = data.subscribeSuccess;
      if(this.subscribed){
        setTimeout(() =>{
          this.store.dispatch(new DEFAULT_SUB_STATE());
        },3000)
      }
      this.errorMessage = data.errorMessage;
    })



  }

  subscribeEmail(){
    this.store.dispatch(new SUBSCRIBE_EMAIL(this.emailForm.value));
    this.emailForm.reset();

  }

}
