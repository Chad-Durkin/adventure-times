import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';
import { Enemy } from '../enemy.model';

@Component({
  selector: 'app-forward-1',
  templateUrl: './forward-1.component.html',
  styleUrls: ['./forward-1.component.css'],
  providers: [CharacterService]
})
export class Forward1Component implements OnInit {
  guard: Enemy = new Enemy('Guard', 30, 50, 2, 3, 3, 3, 3);
  charId: string;
  character: FirebaseObjectObservable<any>;
  characters: FirebaseListObservable<any>;
  charDamage: number;
  enemyDamage: number;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private characterService: CharacterService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.charId = urlParameters['id'];
    });
    this.character = this.characterService.getCharacterById(this.charId);
    this.characters = this.characterService.getCharacters();
  }

  action(newAction: string, theChar: Character) {
    if(newAction == 'long-bow') {
      //Damage rolls for char and enemy
      this.charDamage = (Math.floor((Math.random() * 10) + 1) + theChar.dexterity);
      this.enemyDamage = (Math.floor((Math.random() * 10) + 1) + this.guard.dexterity);
      //Update char and enemy health
      theChar.health -= this.enemyDamage;
      this.guard.health -= this.charDamage;
      //Update char health on database
      this.characterService.updateCharacter(theChar, this.charId);
    } else if(newAction == 'shield bash') {

      if(this.guard.health <= 0)
      {
        this.router.navigate(['forward-1-win', this.charId]);
      }
    } else if(newAction == 'run') {


    } else if(newAction == 'persuade') {

    }
  }

  continueAdventure(){
    this.router.navigate(['forward-1-win', this.charId]);
  }


}
