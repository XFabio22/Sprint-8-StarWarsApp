import { User } from 'src/app/interfaces/user.intefaces';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../Services/auth.service';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  myForm: FormGroup = this.fb.group({
    email: ['fabio@gmail.com',
     //[Validators.required
      // Validators.pattern(this.validated.emailPattern)]
  ],
    password: ['122312', 
    //[Validators.required, Validators.minLength(6)]
  ]
  })




  constructor(private authService:AuthService , private router:Router, private fb:FormBuilder) { }
  ngOnInit(): void {
  
  }

  userData:User = {
    email:this.myForm.value.email,
    password:this.myForm.value.password,
  }
  login(){
    if(this.myForm.valid){
      this.authService.loginData=this.userData;
      this.authService.Login().subscribe(resp =>{
        console.log(resp);
          if(resp!){
            this.router.navigate(['./Welcome'])
          }
      })
    
    }
    return;

  }
  // logout(){
  //   this.authService.logout();
  //   this.router.navigate(['./Welcome'])
  // }



}
