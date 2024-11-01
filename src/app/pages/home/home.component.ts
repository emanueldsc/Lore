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

}
