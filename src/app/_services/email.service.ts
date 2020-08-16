import { Injectable } from '@angular/core';
import { HomeComponent } from '../routingcompenents/home/home.component';



@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  private email;
  setEmail(value){
    this.email = value;
  }

  getEmail(){
    return this.email;
  }

}
