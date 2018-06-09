import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

 submitform(){
   if(this.username === undefined && this.password === undefined){
    alert('Please Enter the All the fields');
   } else if (this.username != 'admin@opsfinity.com'  && this.password != '123456' ){
     alert('Please Enter Valid user');
   } else {
    console.log('Form Valid');
    this.router.navigate(['forms']);
   }
 }
}
