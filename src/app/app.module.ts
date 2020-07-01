import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
//import { AuthInterceptorService } from './_services/authinterceptor.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { HomeComponent } from './routingcompenents/home/home.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { WelcomeRegisterComponent } from './authentication/welcome-register/welcome-register.component';
import { WelcomeMessageRegisterComponent } from './authentication/welcome-message-register/welcome-message-register.component';
import { WelcomeMessageLoginComponent } from './authentication/welcome-message-login/welcome-message-login.component';
import { OtpComponent } from './authentication/otp/otp.component';
import {UserserivceService} from './_services/userserivce.service';
import {ToastrModule} from 'ngx-toastr';
  // import { from } from 'rxjs';
import { toTypeScript } from '@angular/compiler';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    WelcomeRegisterComponent,
    WelcomeMessageRegisterComponent,
    WelcomeMessageLoginComponent,
    OtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserserivceService,
    // {provide: HTTP_INTERCEPTORS,
    // useClass: AuthInterceptorService,
    // multi: true}
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
