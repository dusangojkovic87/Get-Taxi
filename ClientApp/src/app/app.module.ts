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
import { LoginComponent } from './Pages/login/login.component';
import { LoginFormComponent } from './Pages/login/login-form/login-form.component';
import { RegisterFormComponent } from './Pages/login/register-form/register-form.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { AuthService } from './Services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogoutComponent } from './Pages/logout/logout.component';
import { AboutComponent } from './Pages/about/about.component';
import { AboutServiceCardComponent } from './Pages/about/about-service-card/about-service-card.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { AboutBookTaxiCardComponent } from './Pages/about/about-book-taxi-card/about-book-taxi-card.component';
import { GetCabComponent } from './Pages/get-cab/get-cab.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { SendMessageComponent } from './Pages/contact/send-message/send-message.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { BlogPostComponent } from './Pages/blog/blog-post/blog-post.component';
import { BookingEffects } from './effects/booking.effects';
import { AuthInterceptor } from './HttpInterceptors/authInterceptor';
import { MessageEffects } from './effects/message.effects';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    BookingHomePageFormComponent,
    WelcomeToUsCardComponent,
    ChooseCarClassCardComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    LogoutComponent,
    AboutComponent,
    AboutServiceCardComponent,
    FooterComponent,
    AboutBookTaxiCardComponent,
    GetCabComponent,
    ContactComponent,
    SendMessageComponent,
    BlogComponent,
    BlogPostComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects, BookingEffects, MessageEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [AuthService,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
