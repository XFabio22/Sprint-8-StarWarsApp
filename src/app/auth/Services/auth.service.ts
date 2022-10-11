
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User, UsersLog } from 'src/app/interfaces/user.intefaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private base_Url: string = environment.baseUrl
  constructor(private http: HttpClient) { }
  private _user:User |undefined;
  get auth():User{
    return {...this._user!}
  }

    loginData!:UsersLog 
    

  // http://localhost:3000/usuarios/?email=fabio@gmail.com&password=122312

  // buscarcuandoInicie(){
  //   return this.http.get<User>(`${this.base_Url}/usuarios/?email=${this.loginData.email}&password=${this.loginData.password}`)
  // }


  statusUser():Observable<boolean> {
    if(!localStorage.getItem('token')){
      return of(false); //el OF sirve para crear Observable en base al argumento que le ponemos 
    }
    return this.http.get<User>(`${this.base_Url}/usuarios/1`)
    .pipe(
      map(resp=> {
        this._user = resp;
        console.log('map',resp);
        return true;
      })
    )
  }

  Login(){
    return this.http.get<User >(`${this.base_Url}/usuarios/?email=${this.loginData.email}&password=${this.loginData.password}`)
    .pipe(
      // map((res: User)=>{
      //   console.log(res);
      //   this.saveToken(res.id!)
        
      // })
      tap(resp => this._user = resp),
  


      );
  }
  register(user:User ) {
    return this.http.post<User>(`${this.base_Url}/usuarios/`, user)
      .pipe(
        tap(user => this._user = user),
        tap(user => localStorage.setItem('token', user.id!))
        
      )
      
  }
  logout(){
    localStorage.clear();
  }
}
