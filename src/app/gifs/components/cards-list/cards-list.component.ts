import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-cards-list',
  templateUrl: './cards-list.component.html'
})
export class CardsListComponent {

  @Input()
  public gifs: Gif[] = [];

}
