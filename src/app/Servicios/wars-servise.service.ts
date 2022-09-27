import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WarsServiseService {
  private Star_Url:string = 'https://swapi.dev/api/';

  constructor(http : HttpClient) { }
}
