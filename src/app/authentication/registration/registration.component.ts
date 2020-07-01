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
    if((this.userdata['firstName']!=undefined || this.userdata['firstName']!=null) && (this.userdata['lastName']!=undefined || this.userdata['lastName']!=null) && (this.userdata['email']!=undefined || this.userdata['email']!=null) && (this.userdata['contactNo']!=undefined || this.userdata['contactNo']!=null) && (this.password!=undefined || this.password!=null) && (this.confpassword!=undefined || this.confpassword!=null)){
      if(!!this.password && !!this.confpassword && this.password.length >= 6){
        if (this.password == this.confpassword){
          this.userdata['password']=this.password
          this.userservice.registreuser(this.userdata).then(
            resp=>{
              console.log(resp)
              this.router.navigate(['/welcome-message-register']);
            },error=>{
              console.log(error)
            })
        }else{
          this.toastr.warning("Password and Confirm Password not matched!",'Alert',{
            timeOut:3000,
            positionClass:'toast-top-center'
            })
        }
        
      }else{
        this.toastr.warning("Please enter atleast 6-character in password field!",'Alert',{
          timeOut:3000,
          positionClass:'toast-top-center'
          })
      }
      
    }else{
      this.toastr.warning("Please fill all the details first!",'Alert',{
        timeOut:3000,
        positionClass:'toast-top-center'
        })
    }
    
    
  }



}
// onSubmit() {
//   this.grpservice.registergroup(this.groupdata).subscribe(
//   data=>{
//   console.log(data)
  
//   this.router.navigate(['/main/successmsg'],{queryParams:{msg:'groupsuccess'}});
//   },error => {
//   console.log(error)
  
//   alert("Failed to Register")
//   })
  