import { PilotsComponent } from './pilots/pilots.component';


import { HomeRoutingModule } from './home-Routing.Module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { IdPipe } from './pipe/id';
import { ShowStarShipsComponent } from './show-star-ships/show-star-ships.component';
import { StarShipsComponent } from './star-ships/star-ships.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { InfiniteScrollModule } from '@serrulien/ngx-infinite-scroll';




@NgModule({
  declarations: [
    HomeComponent,
    IdPipe,
    ShowStarShipsComponent,
    StarShipsComponent,
    PrincipalPageComponent,
    PilotsComponent
    

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InfiniteScrollModule
  ]
})
export class HomeModule { }
