import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroeNames: string[] = ["Spiderman", "Ironman", "Hulk", "Thor"];
  public deletedHero?: string;

  clearLastHero ():void {

    this.deletedHero = this.heroeNames.pop();
  }



}
