import { WelcomeComponent } from './welcome/welcome.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component: WelcomeComponent
  },
  {
    path:'auth',
    loadChildren: ( )=> import('./auth/auth.module').then(m=> m.AuthModule)
  },
  {
    path:'StarWars',
    loadChildren:()=> import('./Home/home.module').then(m =>m.HomeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
