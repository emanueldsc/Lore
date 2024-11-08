import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from '../../models/MenuItem.model';
import { CardMenuComponent } from '../card-menu/card-menu.component';
import { TypeCard } from 'src/app/models/TypeCard.enum';

@Component({
  selector: 'lore-menu[search]',
  standalone: true,
  imports: [
    CardMenuComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.sass'
})
export class MenuComponent {

  @Output() search = new EventEmitter<string>();

  // esse atributo via ser recebido via parâmetro
  menu: MenuItem[] = [
    { label: TypeCard['pt'].adventures, background: 'assets/imgs/menu_adventure.jpeg' },
    { label: TypeCard['pt'].characters, background: 'assets/imgs/menu_characters.jpeg' },
    { label: TypeCard['pt'].creatures, background: 'assets/imgs/menu_creatures.jpeg' },
    { label: TypeCard['pt'].items, background: 'assets/imgs/menu_items.jpeg' },
    { label: TypeCard['pt'].lands, background: 'assets/imgs/menu_lands.jpeg' },
    { label: TypeCard['pt'].magics, background: 'assets/imgs/menu_magics.jpeg' }
  ]

}
