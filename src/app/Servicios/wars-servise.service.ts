import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarShips  } from '../interfaces/starships.interfaces';


@Injectable({
  providedIn: 'root'
})
export class WarsServiseService {
  private Star_Url:string = environment.shipsUrl;



  constructor(private http : HttpClient) { }
  // UsersList:Users[]=[]

  allStarShips(PagesNum:string):Observable<StarShips>{
    const url = `${this.Star_Url}/starships/?page=${PagesNum}`;
    return this.http.get<StarShips>(url);
  }

  datailsStarShips(num: string):Observable<StarShips>{  //Buscar por indice de nave num???= 2,3,5,9,10etc
    const url = `${this.Star_Url}/starships/${num}`;
    return this.http.get<StarShips>(url);
  }

  // PushLocalStorage(lista:Users[]){
  //   localStorage.setItem('lista',JSON.stringify(lista))
  // }
  

}


