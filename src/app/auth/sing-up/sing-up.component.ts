import { Router } from '@angular/router';
import { AuthResponse } from 'src/app/interfaces/user.intefaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { authService } from './../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  constructor(private AuthService: authService, private fb: FormBuilder, private router: Router) { }
  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })
  ngOnInit(): void {
  }
  submit() {
    const { name, email, password } = this.myForm.value;

    if (this.myForm.invalid) {
      return
    } else if (this.myForm.valid) {

      this.AuthService.register(name, email, password)
        .subscribe(ok => {
          if (ok) {
            this.router.navigate(['/Welcome'])
          }
        })
      this.myForm.reset({ id: '', email: '', name: '' })
    }
  }

}
