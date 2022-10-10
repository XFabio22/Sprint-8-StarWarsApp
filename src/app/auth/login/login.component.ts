
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
    email: ['fabioaguilar222@gmail.com',
     //[Validators.required
      // Validators.pattern(this.validated.emailPattern)]
  ],
    password: ['1234124', 
    //[Validators.required, Validators.minLength(6)]
  ]
  })


  get email() {
    return this.myForm.get('email')?.value;
  }

  get password() {
    return this.myForm.get('password')?.value;
  }

  constructor(private authService:AuthService , private router:Router, private fb:FormBuilder) { }
  ngOnInit(): void {
  
  }

  userData = {
    email:this.myForm.value.email,
    password:this.myForm.value.password
  }
  login(){
    if(this.myForm.valid){
      this.authService.Login().subscribe(resp =>{
        console.log(resp);
          if(resp!){
            this.router.navigate(['./Welcome'])
          }
      })
    
    }
    return;

  }
  logout(){
    this.authService.logout();
    this.router.navigate(['./Welcome'])
  }



}
