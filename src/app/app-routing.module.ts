
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { StarShipsComponent } from './lista/star-ships/star-ships.component';
import { ShowStarShipsComponent } from './show-star-ships/show-star-ships.component';

const routes: Routes = [

    {
      path:'',
      component:HomeComponent
    },
    {
      path:'StarShips',
      component:StarShipsComponent
    },
    {
      path:'details/:url',
      component:ShowStarShipsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
