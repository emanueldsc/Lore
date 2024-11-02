import { Component } from '@angular/core';
import { MenuItem } from '../../models/MenuItem.model';
import { CardMenuComponent } from '../card-menu/card-menu.component';

@Component({
  selector: 'lore-menu',
  standalone: true,
  imports: [
    CardMenuComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.sass'
})
export class MenuComponent {

  // esse atributo via ser recebido via parâmetro
  menu: MenuItem[] = [
    { label: 'Adventures', background: 'assets/imgs/menu_adventure.jpeg', link: '#' },
    { label: 'Characters', background: 'assets/imgs/menu_characters.jpeg', link: '#' },
    { label: 'Creatures', background: 'assets/imgs/menu_creatures.jpeg', link: '#' },
    { label: 'Items', background: 'assets/imgs/menu_items.jpeg', link: '#' },
    { label: 'Lands', background: 'assets/imgs/menu_lands.jpeg', link: '#' },
    { label: 'Magics', background: 'assets/imgs/menu_magics.jpeg', link: '#' }
  ]

}
