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
    CharacterComponent
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
