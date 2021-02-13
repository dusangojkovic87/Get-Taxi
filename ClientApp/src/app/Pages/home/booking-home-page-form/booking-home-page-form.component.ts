import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  BOOKING_DEFAULT_STATE,
  BOOK_TAXI,
} from 'src/app/actions/booking.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-booking-home-page-form',
  templateUrl: './booking-home-page-form.component.html',
  styleUrls: ['./booking-home-page-form.component.css'],
})
export class BookingHomePageFormComponent implements OnInit {
  bookingForm: any;
  bookedSucces?: boolean;

  constructor(private fb: FormBuilder, private store: Store<State>) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      startDestination: ['', Validators.required],
      endDestination: ['', Validators.required],
      timeDate: ['', Validators.required],
      carClass: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });

    this.store
      .select((state) => state.bookingState)
      .subscribe((data) => {
        this.bookedSucces = data.bookedSucces;
        if (this.bookedSucces) {
          setTimeout(() => {
            this.store.dispatch(new BOOKING_DEFAULT_STATE());
          }, 3000);
        }
      });
  }

  bookTaxi() {
    this.store.dispatch(new BOOK_TAXI(this.bookingForm.value));
    this.bookingForm.reset();
  }
}
