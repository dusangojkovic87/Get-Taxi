import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LOGIN } from 'src/app/actions/auth.actions';
import { State } from 'src/app/reducers';
import {User} from "../../../Models/User";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm:any;
  errorMessage?:string;

  constructor(private fb:FormBuilder,private store:Store<State>) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email:["",Validators.required],
      Password:["",Validators.required],
    })


    this.store.select(state => state.authState).subscribe(authState =>{
      this.errorMessage = authState.errorMessage
    })
  }

  login(){
    const payload = {
      Email:this.loginForm.value.Email,
      Password:this.loginForm.value.Password
    };

    this.store.dispatch(new LOGIN(payload));
  }

}
