
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { StarShipsComponent } from './star-ships/star-ships.component';
import { ShowStarShipsComponent } from './show-star-ships/show-star-ships.component';


const rutas :Routes= [

    {
        path:'',
        children:[
        {
            path: 'Home',
            component:HomeComponent
        },
        {
            path:'StarShips',
            component:StarShipsComponent
        },
        {
            path:'details/:url',
            component:ShowStarShipsComponent
        },
        {
            path:'**',
            redirectTo:'Home'
        }

        ]
    }]

@NgModule({
declarations: [],
imports: [
    CommonModule,
    RouterModule.forChild(rutas)

],exports:[
    RouterModule
]

})
export class HomeRoutingModule { }