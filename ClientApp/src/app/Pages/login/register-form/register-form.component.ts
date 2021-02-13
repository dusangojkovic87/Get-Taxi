import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DEFAULT_STATE, REGISTER } from 'src/app/actions/auth.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit, OnDestroy {
  registerForm: any;
  registrationError?: boolean;
  registerSuccess?: boolean;

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      Name: ['', Validators.required],
      Surname: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
    });

    this.store
      .select((state) => state.authState)
      .subscribe((data) => {
        this.registrationError = data.errorMessage;
      });

    this.store
      .select((state) => state.authState)
      .subscribe((data) => {
        this.registerSuccess = data.registerSuccess;
        if (this.registerSuccess) {
          this.router.navigate(['/login/sign-in']);
        }
      });
  }

  register() {
    this.store.dispatch(new REGISTER(this.registerForm.value));
    this.registerForm.reset();
  }

  ngOnDestroy() {
    this.store.dispatch(new DEFAULT_STATE());
  }
}
