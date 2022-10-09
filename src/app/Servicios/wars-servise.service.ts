import { pilots } from './../interfaces/starships.interfaces';
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


  allStarShips(PagesNum:number):Observable<StarShips>{
    const url = `${this.Star_Url}/starships/?page=${PagesNum}`;
    return this.http.get<StarShips>(url);
  }

  datailsStarShips(num: string):Observable<StarShips>{  
    const url = `${this.Star_Url}/starships/${num}`;
    return this.http.get<StarShips>(url);
  }

  pilotsDetails(num:string):Observable<pilots>{
    const url = `${this.Star_Url}/people/${num}`;
    return this.http.get<pilots>(url);
  } 
}


