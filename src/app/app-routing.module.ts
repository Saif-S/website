import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './gaurd/auth.gaurd';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { HomeComponent } from './routingcompenents/home/home.component';
import { WelcomeRegisterComponent } from './authentication/welcome-register/welcome-register.component';
import { WelcomeMessageRegisterComponent } from './authentication/welcome-message-register/welcome-message-register.component';
import { WelcomeMessageLoginComponent } from './authentication/welcome-message-login/welcome-message-login.component';
import { OtpComponent } from './authentication/otp/otp.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [{ path:'',component:HomeComponent},
{ path:'login',component:LoginComponent},
{ path:'join-waitlist',component:RegistrationComponent},
{path:'welcome-register',component:WelcomeRegisterComponent},
{path:'welcome-message-register',component:WelcomeMessageRegisterComponent},
{path:'welcome-message-login',component:WelcomeMessageLoginComponent},
{path:'otp',component:OtpComponent},
{path:'coming-soon',component:ComingSoonComponent},
{path:'error-page', component:ErrorPageComponent},
{ path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
