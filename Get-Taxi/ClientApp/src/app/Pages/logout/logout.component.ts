import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store} from "@ngrx/store";
import { LOGOUT } from 'src/app/actions/auth.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private store:Store<State>,private router:Router) { }

  ngOnInit(): void {
    this.logout();
  }

  logout(){
    this.store.dispatch(new LOGOUT());
    this.router.navigate(["/login"]);
  }

}
