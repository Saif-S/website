import { Component, OnInit } from '@angular/core';
import { UserserivceService} from '../../_services/userserivce.service'
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userdata:any={}

  constructor(private userservice:UserserivceService,private toastr: ToastrService,private router:Router) { }
  password:any;
  confpassword:any;
  
  ngOnInit(): void {
  }
  register(){
    if((this.userdata['firstName']!=undefined || this.userdata['firstName']!=null) && (this.userdata['lastName']!=undefined || this.userdata['lastName']!=null) && (this.userdata['email']!=undefined || this.userdata['email']!=null) && (this.userdata['contactNo']!=undefined || this.userdata['contactNo']!=null)&& (this.userdata['companyName']!=undefined || this.userdata['companyName']!=null)){
          this.userservice.registreuser(this.userdata).then(
            resp=>{
              console.log(resp)
              if(resp['msg']=='User registered successfully'){
                this.router.navigate(['/welcome-message-register']);
              }else{
                this.toastr.warning("Something Went Wrong!",'Alert',{
                  timeOut:3000,
                  positionClass:'toast-top-center'
                  })
              }
            },error=>{
              console.log(error)
            })
    }else{
      this.toastr.warning("Please fill all the details first!",'Alert',{
        timeOut:3000,
        positionClass:'toast-top-center'
        })
    } 
  }
}