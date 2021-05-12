import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-book-taxi-card',
  templateUrl: './about-book-taxi-card.component.html',
  styleUrls: ['./about-book-taxi-card.component.css']
})
export class AboutBookTaxiCardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirectToBooking(){
    this.router.navigate(["/get-cab"]);

  }

}
