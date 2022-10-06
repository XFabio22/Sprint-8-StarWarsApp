import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  myForm:FormGroup = this.fb.group({
    clientName:['',[Validators.required,Validators.minLength(3)]],
    clientGmail:['',[Validators.required]],
    ClientPassword:['',[Validators.required,Validators.minLength(4)]]
  })
  validate(){
    
  }
  ngOnInit(): void {
  }

}
