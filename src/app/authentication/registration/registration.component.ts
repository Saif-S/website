import { Component, OnInit } from '@angular/core';
import { UserserivceService} from '../../_services/userserivce.service'
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';
import { EmailService } from '../../_services/email.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userdata:any={}

  constructor(private userservice:UserserivceService,private toastr: ToastrService,private router:Router, private emailservice: EmailService) { }
  password:any;
  confpassword:any;
  showthanks:boolean=false;
  showthankstext:boolean = false;
  input:boolean = true;
  email: string;
  ngOnInit() {
   this.email = this.emailservice.getEmail()
    console.log(this.email)
  }
  register(){
    if((this.userdata['firstName']!=undefined || this.userdata['firstName']!=null) && (this.userdata['lastName']!=undefined || this.userdata['lastName']!=null) && (this.userdata['email']!=undefined || this.userdata['email']!=null) && (this.userdata['contactNo']!=undefined || this.userdata['contactNo']!=null)&& (this.userdata['company']!=undefined || this.userdata['company']!=null)){
          this.userservice.registreuser(this.userdata).then(
            resp=>{
              console.log(resp)
              if(resp['err']==false){
                //this.router.navigate(['/welcome-message-register']);
                // this.showthanks=true;
                setTimeout(() => {
                  this.showthanks = true;
                  this.input = false;
                }, 3000);
                setTimeout(() => {
                  this.showthanks = false;
                  this.showthankstext = true;
                }, 6000);
                setTimeout(() => {
                  this.showthankstext = false;
                  this.input = true;
                }, 9000);
                this.userdata={}
              }else{
                this.showthanks=false;
                this.toastr.warning("Something Went Wrong!",'Alert',{
                  timeOut:3000,
                  positionClass:'toast-top-center'
                  })
              }
            },error=>{
              this.showthanks=false;
              console.log(error)
              this.toastr.warning("Failed to Register!",'Alert',{
                timeOut:3000,
                positionClass:'toast-top-center'
                })

            })
    }else{
      this.showthanks=false;
      this.toastr.warning("Please fill all the details first!",'Alert',{
        timeOut:3000,
        positionClass:'toast-top-center'
        })
    }
  }

  validateMobileNo(value){
    var k = value.keyCode;
          return ((k >= 48 && k <= 57) || k == 8);
  }

}
