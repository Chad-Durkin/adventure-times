import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  providers: [CharacterService]
})
export class CharacterListComponent implements OnInit {

  characters = this.characterService.characters;
  // FirebaseListObservable<any[]>;

  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit() {
  }

  playChar(charId: string) {
    this.router.navigate(['start', charId])
  }

}
