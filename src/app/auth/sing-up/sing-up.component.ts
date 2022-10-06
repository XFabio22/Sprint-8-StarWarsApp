import { WarsServiseService } from './../../Servicios/wars-servise.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/interfaces/user.intefaces';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  constructor( private fb:FormBuilder, private warsServiseService:WarsServiseService) { }
  myForm:FormGroup = this.fb.group({
    clientName:['',[Validators.required,Validators.minLength(3)]],
    clientGmail:['',[Validators.required]],
    ClientPassword:['',[Validators.required,Validators.minLength(4)]]
  })
  get UsersList(){
    return this.warsServiseService.UsersList;
  }
  submit(){
    const User:Users = {
      clientName:this.myForm.value.clientName,
      clientGmail:this.myForm.value.clientGmail,
      ClientPassword:this.myForm.value.ClientPassword
    }

    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
    }else if (this.myForm.valid){
      this.UsersList.push(User);
      this.warsServiseService.PushLocalStorage(this.UsersList)
      this.myForm.reset({clientName:'',clientGmail:'',ClientPassword:''})
    }
  }
  ngOnInit(): void {
  }

}
