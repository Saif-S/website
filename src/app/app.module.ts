import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AuthInterceptorService } from './_services/authinterceptor.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { HomeComponent } from './routingcompenents/home/home.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS,
    // useClass: AuthInterceptorService,
    // multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
