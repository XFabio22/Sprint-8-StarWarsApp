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


  myForm: FormGroup = this.fb.group({
    id : ['',Validators.required],
    usuario : ['',Validators.required],
    email:['',Validators.required],

  })

  constructor(private authService:AuthService , private router:Router, private fb:FormBuilder) { }
  ngOnInit(): void {
  
  }
  login(){
    const usuarioRegistrado:Users ={
      id: this.myForm.value.id,
      email: this.myForm.value.email,
      usuario: this.myForm.value.usuario,
    }
    if(this.myForm.invalid){
      return
    }else if(this.myForm.valid){
    this.authService.nuevo=usuarioRegistrado;
      this.authService.Login().subscribe(resp =>{
        console.log(resp);
          if(resp.id){
            this.router.navigate(['./Welcome'])
          }
      })
    }
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['./Welcome'])
  }



}
