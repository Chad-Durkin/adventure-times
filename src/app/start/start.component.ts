import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Character} from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [CharacterService]
})
export class StartComponent implements OnInit {

  charId: string;
  character;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private characterService: CharacterService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.charId = urlParameters['id'];
    });
    this.character = this.characterService.getCharacterById(this.charId);
  }

  pathChoice(path: string) {
    if (path === "left") {
      this.router.navigate(['left-1', this.charId]);
    } else if (path === "forward") {
      this.router.navigate(['forward-1', this.charId]);
    } else if (path === "right") {
      this.router.navigate(['right-1', this.charId]);
    }
  }

}
