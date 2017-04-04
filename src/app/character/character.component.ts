import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [CharacterService]
})

export class CharacterComponent implements OnInit {
  skillPoints: number = 20;
  charisma: number = 0;
  dexterity: number = 0;
  strength: number = 0;
  luck: number = 0;
  acrobatics: number = 0

  addSkill(skill: string) {
    if(skill == 'charisma'){
      this.charisma += 1;
    } else if(skill == 'dexterity'){
      this.dexterity += 1;
    } else if(skill == 'strength'){
      this.strength += 1;
    } else if(skill == 'luck'){
      this.luck += 1;
    }else if(skill == 'acrobatics'){
      this.acrobatics += 1;
    }
    this.skillPoints -= 1;
  }

  minusSkill(skill: string) {
    if(this.skillPoints <= 20)
    {
      if(skill == 'charisma' && this.charisma > 0){
        this.charisma -= 1;
        this.skillPoints += 1;
      } else if(skill == 'dexterity' && this.dexterity > 0){
        this.dexterity -= 1;
        this.skillPoints += 1;
      } else if(skill == 'strength' && this.strength > 0){
        this.strength -= 1;
        this.skillPoints += 1;
      } else if(skill == 'luck' && this.luck > 0){
        this.luck -= 1;
        this.skillPoints += 1;
      }else if(skill == 'acrobatics' && this.acrobatics > 0){
        this.acrobatics -= 1;
        this.skillPoints += 1;
      }
    }
  }

  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit() {
  }

  createChar(name: string, height: string, race: string, charisma: number, acrobatics: number, dexterity: number, strength: number, luck: number) {
    var newCharacter: Character = new Character(name, height, race, charisma, acrobatics, dexterity, strength, luck);
    this.characterService.addCharacter(newCharacter);
    this.router.navigate(['character-list']);
  }

}
