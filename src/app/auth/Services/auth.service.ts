import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Users } from 'src/app/interfaces/user.intefaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(private http: HttpClient) { }
  // //   PushLocalStorage(lista:Users){
  // //   localStorage.setItem('lista',JSON.stringify(lista))
  // // }


  
  private base_Url: string = environment.baseUrl
  constructor(private http: HttpClient) { }
  private _auth:Users |undefined;
  get auth():Users{
    return {...this._auth!}
  }

  Login(){
    return this.http.get<Users>(`${this.base_Url}/usuarios/1`)

    .pipe(
      tap(resp=> this._auth = resp )
      );
  }

  
  logout(){
    this._auth = undefined;
  }


  // getLocalStorage(item:string){
  //   if(!localStorage.getItem(item)){
  //     return;
  //   }
  //   this._authUser = JSON.parse(localStorage.getItem(item)!)
    
  // }
  
}
