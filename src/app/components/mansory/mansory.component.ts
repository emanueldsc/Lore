import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardItem } from 'src/app/models/CardItem.model';
import { CardComponent } from "../card/card.component";
import { MansoryItem } from 'src/app/models/MansoryItem.model';

@Component({
  selector: 'lore-mansory[items]',
  standalone: true,
  imports: [JsonPipe, CardComponent],
  templateUrl: './mansory.component.html',
  styleUrl: './mansory.component.sass'
})
export class MansoryComponent {

  private _mansoryBlocks: MansoryItem[] = []

  get mansoryBlocks(): MansoryItem[] {
    return this._mansoryBlocks
  }

  @Input()
  set items(cardItems: CardItem[]) {
    this._mansoryBlocks = cardItems.map((item) => ({
      card: item,
      gridColumn: 'span 1',
      gridRow: Math.random() >= 0.5 ? 'span 2' : 'span 3'
    }))
  }
  
}
