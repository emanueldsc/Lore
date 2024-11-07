import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from '../../models/MenuItem.model';
import { CardMenuComponent } from '../card-menu/card-menu.component';

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
    { label: 'Adventures', background: 'assets/imgs/menu_adventure.jpeg' },
    { label: 'Characters', background: 'assets/imgs/menu_characters.jpeg' },
    { label: 'Creatures', background: 'assets/imgs/menu_creatures.jpeg' },
    { label: 'Items', background: 'assets/imgs/menu_items.jpeg' },
    { label: 'Lands', background: 'assets/imgs/menu_lands.jpeg' },
    { label: 'Magics', background: 'assets/imgs/menu_magics.jpeg' }
  ]

}
