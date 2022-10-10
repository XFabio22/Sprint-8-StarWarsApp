import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/user.intefaces';
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
    id:['',Validators.required],
    email:['',Validators.required],
    usuario:['',Validators.required]
  })
  ngOnInit(): void {
  }
  usuariosList!:Users
  submit(){
    const newUser:Users={
      id: this.myForm.value.id,
      email: this.myForm.value.email,
      usuario: this.myForm.value.usuario
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
