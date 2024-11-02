import { Component, Input } from '@angular/core';
import { CardItem } from 'src/app/models/CardItem.model';

@Component({
  selector: 'lore-mansory[items]',
  standalone: true,
  imports: [],
  templateUrl: './mansory.component.html',
  styleUrl: './mansory.component.sass'
})
export class MansoryComponent {
  @Input() items: CardItem[] = [];
}
