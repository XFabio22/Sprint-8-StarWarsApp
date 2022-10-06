import { Result } from './../interfaces/starships.interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarShips  } from '../interfaces/starships.interfaces';
import { Users } from '../interfaces/user.intefaces';

@Injectable({
  providedIn: 'root'
})
export class WarsServiseService {
  private Star_Url:string = 'https://swapi.dev/api/';



  constructor(private http : HttpClient) { }
  UsersList:Users[]=[]

  allStarShips(PagesNum:string):Observable<StarShips>{
    const url = `${this.Star_Url}/starships/?page=${PagesNum}`;
    return this.http.get<StarShips>(url);
  }

  datailsStarShips(num: string):Observable<StarShips>{  //Buscar por indice de nave num???= 2,3,5,9,10etc
    const url = `${this.Star_Url}/starships/${num}`;
    return this.http.get<StarShips>(url);
  }

  PushLocalStorage(lista:Users[]){
    localStorage.setItem('lista',JSON.stringify(lista))
  }
  

}


