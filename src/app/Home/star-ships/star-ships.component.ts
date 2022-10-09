
import { Result, StarShips } from './../../interfaces/starships.interfaces';
import { WarsServiseService } from './../../Servicios/wars-servise.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-star-ships',
  templateUrl: './star-ships.component.html',
  styleUrls: ['./star-ships.component.css']
})
export class StarShipsComponent implements OnInit {

  constructor(private WarsServiseService:WarsServiseService) {
  }

  naves:Result[]= []
  page:number = 1;
  URLNAVE:string = ''
  url(url1:string){
  
    console.log(url1);
    
    
  }
  
  buscar(){
    this.WarsServiseService.allStarShips(this.page).subscribe({

      next:(response:StarShips)=>{
        this.naves = response.results
      }
    })
  }
  ngOnInit():void {
    this.buscar()
  }
  onScroll(): void {
    this.WarsServiseService.allStarShips(++this.page)
      .subscribe((response: StarShips) => {
        this.naves.push(...response.results);
        console.log('loaded',this.naves)
      })
  }
  
}
