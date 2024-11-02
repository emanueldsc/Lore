import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/MenuItem.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lore-card-menu[item]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-menu.component.html',
  styleUrl: './card-menu.component.sass'
})
export class CardMenuComponent {

  @Input() item!: MenuItem

}
