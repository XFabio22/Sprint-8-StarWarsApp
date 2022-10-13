import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {  AuthResponse,Usuario } from 'src/app/interfaces/user.intefaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class authService {
  private base_Url: string = environment.baseUrl
  constructor(private http: HttpClient , private router:Router) { }
  private _user:Usuario |undefined;
  get auth():Usuario{
    return {...this._user!}
  }

    

//no hacer la peticion si no esta logado



tokenValidate():Observable<boolean> {
    const url = `${this.base_Url}/auth/renew`
    const headers = new HttpHeaders()
    .set('x-token', localStorage.getItem('token')|| '')
    if(!localStorage.getItem('token') || localStorage.length == 0){ //return si no hay token en localstorage para evitar hacer peticiones sin sentido
        return of(false)
    }
    return this.http.get<AuthResponse>(url,{headers})
    .pipe(
        map(res => {
            localStorage.setItem('token',res.token!)
            this._user ={
                name : res.name!,
                uid: res.uid!
            }
            return res.ok
        }),catchError(err => of(false))
    )
    
}

Login(email:string, password:string){
    const url = `${this.base_Url}/auth`
    const body = {email , password}
    return this.http.post<AuthResponse >(url,body)
    .pipe(
        tap(res =>{
            if(res.ok){
                localStorage.setItem('token',res.token!)
                this._user ={
                    name : res.name!,
                    uid: res.uid!
                }
            }
        }),
        map(res => res.ok),
        catchError(err => of(false))

    )
    




}
register(name:string,email:string,password:string ) {
    const url = `${this.base_Url}/auth/new`
    const body = {email , password, name}
    return this.http.post<AuthResponse>(url,body)
    .pipe(
        tap(res =>{
            if(res.ok){
                localStorage.setItem('token',res.token!)
                this._user ={
                    name : res.name!,
                    uid: res.uid!
                }
            }
        }),
        map(res => res.ok),
        catchError(err => of(false))

    )
}

}