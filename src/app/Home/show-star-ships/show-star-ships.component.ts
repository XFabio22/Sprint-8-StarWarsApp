import { WarsServiseService } from '../../Servicios/wars-servise.service';
import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/starships.interfaces';
import { switchMap, tap,  } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-star-ships',
  templateUrl: './show-star-ships.component.html',
  styleUrls: ['./show-star-ships.component.css']
})
export class ShowStarShipsComponent implements OnInit {


  constructor(private activatedRoute:ActivatedRoute ,   private WarsServiseService:WarsServiseService) { }
  ships!:Result
  img:string = 'https://starwars-visualguide.com/assets/img/starships';
  ngOnInit(): void {
    // switchMap Recibe un observable y regresa otro observable
    this.activatedRoute.params
     .pipe( //pipe sirve para declarar cualquier cantidad de operadores que trabajaran con el producto de este Observable
      switchMap(({url} ) =>
    this.WarsServiseService.datailsStarShips(url)),
      tap(console.log)
      )
    .subscribe( ships =>  this.ships = ships );
    
    
  }



// /^(\w+):\/\/([^\/]+)([^]+)$/
// Los grupos que queramos extraer serán aquellos que van entre paréntesis. Para ello indicamos que nos extraiga cualquier palabra antes del :// para obtener el protocolo, esto lo haremos mediante el código (\w+), todo lo que vaya hasta la primera barra / será el nombre del servidor, como el nombre del servidor puede tener números, letras, guiones, puntos,… indicaremos que será cualquier carácter hasta la barra: ([^\/]+). La parte final, que podrá tener cualquier carácter será la que nos deje el path: ([^]+).

// Tras ejecutar esta expresión regular mediante el comando .exec():

}
