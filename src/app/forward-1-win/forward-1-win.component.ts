import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Location } from '@angular/common';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-forward-1-win',
  templateUrl: './forward-1-win.component.html',
  styleUrls: ['./forward-1-win.component.css'],
  providers: [CharacterService]
})

export class Forward1WinComponent implements OnInit {
  charId: string;
  character: FirebaseObjectObservable<any>;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private characterService: CharacterService) { }

  ngOnInit() {
      this.route.params.forEach((urlParameters) => {
        this.charId = urlParameters['id'];
      });
      this.character = this.characterService.getCharacterById(this.charId);
  }

}
