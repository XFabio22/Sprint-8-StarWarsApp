import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



import { Component, OnInit } from '@angular/core';
import { authService } from '../Services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  myForm: FormGroup = this.fb.group({
    email: ['fabio@gmail.com',[Validators.required,Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  })
  constructor(private authService:authService , private router:Router, private fb:FormBuilder) { }
  ngOnInit(): void {
  
  }
  login(){

    if(this.myForm.invalid){
      return
    }
    const{email,password} =this.myForm.value;
    this.authService.Login(email,password)
    .subscribe(ok =>{
      if(ok){
        this.router.navigate(['./Welcome'])
      }else{

      }
    })

  }

}





