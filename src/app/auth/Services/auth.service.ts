import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Users } from 'src/app/interfaces/user.intefaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private base_Url: string = environment.baseUrl
  constructor(private http: HttpClient) { }
  private _auth:Users |undefined;
  get auth():Users{
    return {...this._auth!}
  }

  nuevo!:Users


  statusUser():Observable<boolean> {
    if(!localStorage.getItem('token')){
      return of(false); //el OF sirve para crear Observable en base al argumento que le ponemos 
    }
    return this.http.get<Users>(`${this.base_Url}/usuarios/1`)
    .pipe(
      map(resp=> {

        this._auth = resp;
        console.log('map',resp);
        return true;
      })
    )
  }
  Login(){
    
    return this.http.get<Users>(`${this.base_Url}/usuarios/1`)
    .pipe(
      tap(resp=> this._auth = resp ),
      tap(resp => localStorage.setItem('token',resp.id!))
      );
  }
  register(user:Users ) {
    return this.http.post<Users>(`${this.base_Url}/usuarios/`, user)
      .pipe(
        tap(user => this._auth = user),
        tap(user => localStorage.setItem('token', user.id!))
        
      )
      
  }
  logout(){
    this._auth = undefined;
  }

}
