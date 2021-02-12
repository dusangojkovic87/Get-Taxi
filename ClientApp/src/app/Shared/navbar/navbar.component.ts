import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LOGOUT } from 'src/app/actions/auth.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navbarState: boolean = false;
  isLogged?: boolean;

  constructor(private store: Store<State>,private router:Router) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.authState.isAuthenticated)
      .subscribe((isAuth) => {
        console.log(isAuth);
        this.isLogged = isAuth;
      });
  }

  toggleNavbar() {
    this.navbarState = !this.navbarState;
  }
}
