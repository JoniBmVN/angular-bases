import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzSService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false,
})

export class MainPageComponent {

  constructor ( private dbzService: DbzSService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter ( id: string):void {
    this.dbzService.onDeleteCharacterById( id );
  }

  onNewCharacter(character: Character):void {

    this.dbzService.onNewCharacter(character);

  }

}
