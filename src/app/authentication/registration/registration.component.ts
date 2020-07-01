import { Component, OnInit } from '@angular/core';
import { UserserivceService} from '../../_services/userserivce.service'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userdata:any={}

  constructor(private userservice:UserserivceService) { }
  password:any;
  confpassword:any;
  
  ngOnInit(): void {
  }
  register(){
    this.userservice.registreuser(this.userdata).then(
      resp=>{
        console.log(resp)
      },error=>{
        console.log(error)
      })
    
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
  