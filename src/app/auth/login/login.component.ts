import { Users } from './../../interfaces/user.intefaces';
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


  // myForm: FormGroup = this.fb.group({
  //   id : ['',Validators.required],
  //   name : ['',Validators.required],
  //   correo:['',Validators.required]
  // })

  constructor(private authService:AuthService , private router:Router, private fb:FormBuilder) { }
  ngOnInit(): void {
  
  }
  login(){
    this.authService.Login().subscribe(resp =>{
      console.log(resp);
      
      if(resp.id){
        this.router.navigate(['./Welcome'])
      }

    })
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['./Welcome'])
  }



}
