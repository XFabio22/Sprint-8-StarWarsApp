import { Result } from './../../interfaces/starships.interfaces';
import { WarsServiseService } from './../../Servicios/wars-servise.service';
import { Component, Input, OnInit } from '@angular/core';
import { pilots } from 'src/app/interfaces/starships.interfaces';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {

  constructor(private WarsServiseService:WarsServiseService,private activatedRoute:ActivatedRoute) { }
  pilots: pilots[] = [];


    ngOnInit(): void {
      this.activatedRoute.params
        .pipe( 
        switchMap(({id} ) =>
      this.WarsServiseService.datailsStarShips(id)),
        tap(console.log)
        )
      .subscribe({
        next:(starship:Result )=>{
          starship.pilots.forEach((id:string)=>
          this.WarsServiseService.pilotsDetails(id.replace(/\D/g,''))
          .subscribe((pilots:pilots) => this.pilots.push(pilots))
          )
        }
      });
      
  }

}
