import { Result, StarShips } from './../../interfaces/starships.interfaces';
import { WarsServiseService } from './../../Servicios/wars-servise.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-star-ships',
  templateUrl: './star-ships.component.html',
  styleUrls: ['./star-ships.component.css']
})
export class StarShipsComponent implements OnInit {

  constructor(private WarsServiseService:WarsServiseService) { }

  naves:Result[]= []

  arrayUrl : string[] = []
  buscarUrl(url:string){
    const url1 =  /^(\w+):\/\/([^\/]+)([^]+)$/.exec(url)
    console.log(url1);
    return  this.arrayUrl =  url1!.splice(0,3);
    
  }
  
  buscar(PagesNum:string){
    this.WarsServiseService.allStarShips(PagesNum).subscribe({

      next:(response:StarShips)=>{
        this.naves = response.results
      }
    })
  }

  
  ngOnInit():void {
    this.buscar("1");
  
  }
  
}
