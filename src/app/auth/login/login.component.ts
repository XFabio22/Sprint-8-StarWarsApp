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
    id : ['1'],
    usuario : ['romy',Validators.required],
    email:['romy05@gmail.com',Validators.required],

  })

  constructor(private authService:AuthService , private router:Router, private fb:FormBuilder) { }
  ngOnInit(): void {
  
  }
  login(){
    if(this.myForm.valid){
      this.authService.Login().subscribe(resp =>{
        console.log(resp);
          if(resp.id){
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
