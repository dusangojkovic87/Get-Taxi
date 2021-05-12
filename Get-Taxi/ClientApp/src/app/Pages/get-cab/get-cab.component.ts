import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  BOOKING_DEFAULT_STATE,
  BOOK_TAXI,
} from 'src/app/actions/booking.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-get-cab',
  templateUrl: './get-cab.component.html',
  styleUrls: ['./get-cab.component.css'],
})
export class GetCabComponent implements OnInit {
  bookingForm: any;
  bookSuccess?: boolean;

  constructor(private fb: FormBuilder, private store: Store<State>) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      startDestination: ['', Validators.required],
      endDestination: ['', Validators.required],
      timeDate: ['', Validators.required],
      carClass: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      passengersNumber: ['1', Validators.required],
    });

    this.store
      .select((state) => state.bookingState)
      .subscribe((data) => {
        this.bookSuccess = data.bookedSucces;
        if (this.bookSuccess) {
          setTimeout(() => {
            this.store.dispatch(new BOOKING_DEFAULT_STATE());
          },3000);
        }
      });
  }

  book() {
    this.store.dispatch(new BOOK_TAXI(this.bookingForm.value));
    this.bookingForm.reset();
  }
}
