import { authService } from './../Services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor( private authService:authService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean > | boolean  {
  
      return this.authService.tokenValidate()
      .pipe(
        tap(valid =>{
          if(!valid){
            this.router.navigate(['/auth'])
          }
        })
      );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean > |boolean {
    return this.authService.tokenValidate()
    .pipe(
      tap(valid =>{
        if(!valid){
          this.router.navigate(['/auth'])
        }
      })
    );
  }
}
