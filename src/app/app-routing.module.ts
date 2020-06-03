import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './gaurd/auth.gaurd';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { HomeComponent } from './routingcompenents/home/home.component';


const routes: Routes = [{ path:'',component:HomeComponent},
{ path:'login',component:LoginComponent},
{ path:'registration',component:RegistrationComponent},
{ path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
