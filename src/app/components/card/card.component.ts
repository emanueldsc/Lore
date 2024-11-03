import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardItem } from 'src/app/models/CardItem.model';

@Component({
  selector: 'lore-card[item]',
  standalone: true,
  imports: [
    CommonModule,
    JsonPipe
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent {
  @Input() item!: CardItem
}
