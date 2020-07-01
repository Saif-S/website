import { Injectable } from '@angular/core';
import {Config} from '../config'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Observable, of, throwError } from 'rxjs';
// import { catchError, tap, map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
 import { Router } from '@angular/router';
const path = new Config().getBaseURL();
@Injectable({
  providedIn: 'root'
})
export class UserserivceService {
 
  constructor(private http:HttpClient) { }
  registreuser(userdata): Promise<any> {

    let promise = new Promise((resolve, reject) => {
    
    this.http.post(`${path}api/v1/register`, userdata).subscribe(res => {
      console.log(res);
      resolve(res);
    },err => {
      console.log("Error occured : " + err);
      reject(err);
    }
    );
    
    });
    
    return promise;
    }
}
