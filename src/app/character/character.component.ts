import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [CharacterService]
})

export class CharacterComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  createChar(name: string, height: string, race: string) {
    var newCharacter: Character = new Character(name, height, race);
    this.characterService.addCharacter(newCharacter);
    console.log(newCharacter);
  }

}
