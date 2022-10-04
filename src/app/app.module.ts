import { IdPipe } from './pipe/id';
import { HomeComponent } from './Home/home/home.component';
import { StarShipsComponent } from './lista/star-ships/star-ships.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowStarShipsComponent } from './show-star-ships/show-star-ships.component';
import { WelcomeComponent } from './Home/welcome/welcome.component';



@NgModule({
  declarations: [
    AppComponent,
    StarShipsComponent,
    HomeComponent,
    NavBarComponent,
    ShowStarShipsComponent,
    IdPipe,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
