import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class CharacterService {

  characters: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.characters = angularFire.database.list('character');
  }

  addCharacter(newCharacter: Character) {
    this.characters.push(newCharacter);
  }

}
