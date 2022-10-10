import { Router } from '@angular/router';
import { AuthService } from './../auth/Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService:AuthService ,private router:Router) { }
  public isCollapsed = true;
  public isLogged = false;
  ngOnInit(): void {
    
  }
  userIsLogged() {
    if (localStorage.getItem('token')) {
      this.isLogged = true;
    }
  }
  
  logout(){
    localStorage.clear();
    this.isLogged = false;
    this.router.navigate(['/']);
  }
  get auth(){
    return this.authService.auth
  }
}
