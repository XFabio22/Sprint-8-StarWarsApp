import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.intefaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  constructor(private AuthService:AuthService , private fb:FormBuilder , private router:Router) { }
  myForm:FormGroup =this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })
  ngOnInit(): void {
  }
  submit(){
    const newUser:User={
      email: this.myForm.value.email,
      first_name: this.myForm.value.firstName,
      last_name:this.myForm.value.lastName,
      password:this.myForm.value.password
    }

    if(this.myForm.invalid){
      return
    }else if(this.myForm.valid){
      
      this.AuthService.register(newUser)
      .subscribe(user => {
        console.log(user)

        if (user.id) {
          this.router.navigate(['/Welcome'])
        }
      })
      this.myForm.reset({id:'',email:'',usuario:''})
    }
  }

}
