import { AuthService } from './../auth/Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    
  }

  get auth(){
    return this.authService.auth
  }
}
