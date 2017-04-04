import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class CharacterService {

  characters: FirebaseListObservable<any[]>;
  currentCharacterId: string;

  constructor(private angularFire: AngularFire) {
    this.characters = angularFire.database.list('characters');
  }

  addCharacter(newCharacter: Character) {
    this.characters.push(newCharacter);
  }

  getCharacterById(characterId: string) {
    return this.angularFire.database.object('characters/' + characterId);
  }

  getCharacters() {
    return this.characters;
  }

  updateCharacter(localChar: Character, charId: string) {
    var charInFirebase = this.getCharacterById(charId);
    charInFirebase.update({health: localChar.health});
  }
}
