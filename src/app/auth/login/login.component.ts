import { Router } from '@angular/router';
import { AuthService } from './../Services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService , private router:Router) { }

  login(){
    this.authService.Login().subscribe(resp =>{
      console.log(resp);
      
      if(!resp.id){
        this.router.navigate(['./StarWars/Home'])
      }

    })
  }
  ngOnInit(): void {
  }

}
