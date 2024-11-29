import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: "./list.component.html",
  styleUrl: './list.component.css',
  standalone: false,
})
export class ListComponent {
  // [new Character("Krillin", 500), new Character("Goku", 10000)]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: "Trunk",
    power: 10
  }]

  onDeleteCharacter(id?: string): void {

    if (!id) return;

    this.onDelete.emit( id );
  }


 }
