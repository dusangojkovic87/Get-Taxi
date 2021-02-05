import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { HeaderComponent } from './Shared/header/header.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { BookingHomePageFormComponent } from './Pages/home/booking-home-page-form/booking-home-page-form.component';
import { WelcomeToUsCardComponent } from './Pages/home/welcome-to-us-card/welcome-to-us-card.component';
import { ChooseCarClassCardComponent } from './Pages/home/choose-car-class-card/choose-car-class-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    BookingHomePageFormComponent,
    WelcomeToUsCardComponent,
    ChooseCarClassCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
