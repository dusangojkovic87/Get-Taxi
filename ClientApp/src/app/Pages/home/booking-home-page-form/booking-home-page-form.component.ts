import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-home-page-form',
  templateUrl: './booking-home-page-form.component.html',
  styleUrls: ['./booking-home-page-form.component.css']
})
export class BookingHomePageFormComponent implements OnInit {
  bookingForm:any;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      startDestination:['',Validators.required],
      endDestination:['',Validators.required],
      timeDate:['',Validators.required],
      carClass:['',Validators.required],
      phoneNumber:['',Validators.required]

    })
  }

  bookTaxi(){
    console.log(this.bookingForm.value);

  }




}
