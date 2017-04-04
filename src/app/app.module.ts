import { StartComponent } from './start/start.component';
import { Forward1Component } from './forward-1/forward-1.component';
import { Right1Component } from './right-1/right-1.component';
import { Left1Component } from './left-1/left-1.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { CharacterListComponent } from './character-list/character-list.component';
import { Forward1WinComponent } from './forward-1-win/forward-1-win.component';

export var firebaseConfig = {
    apiKey: "AIzaSyDuPAatPd8ab1FBMymJHS1XjYodoz8vY48",
    authDomain: "adventure-b11aa.firebaseapp.com",
    databaseURL: "https://adventure-b11aa.firebaseio.com",
    storageBucket: "adventure-b11aa.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterComponent, Left1Component, Right1Component, Forward1Component, StartComponent, CharacterListComponent, Forward1Component, Forward1WinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
