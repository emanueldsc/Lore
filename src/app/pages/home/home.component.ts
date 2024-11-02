import { Component } from '@angular/core';
import { FilterFieldComponent } from '../../components/filter-field/filter-field.component';
import { MansoryComponent } from '../../components/mansory/mansory.component';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'lore-home',
  standalone: true,
  imports: [
    MenuComponent,
    FilterFieldComponent,
    MansoryComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  masonryItems = Array.from({ length: 15 }, (_, i) => ({
    title: `Item ${i + 1}`,
    description: `Descrição do Item ${i + 1}`,
    gridColumn: i % 5 === 0 ? 'span 2' : 'span 1', // A cada 5 itens, ocupar 2 colunas
    gridRow: i % 3 === 0 ? 'span 2' : 'span 1'     // A cada 3 itens, ocupar 2 linhas
  }));
}
