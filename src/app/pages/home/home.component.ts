import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FilterFieldComponent } from '../../components/filter-field/filter-field.component';
import { MansoryComponent } from '../../components/mansory/mansory.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { MansoryItem } from 'src/app/models/MansoryItem.model';
import { CardItem } from 'src/app/models/CardItem.model';

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
export class HomeComponent implements OnInit {

  cards: CardItem[] = []

  ngOnInit(): void {
    for (let i = 0; i < 50 ; i++) {
      this.cards.push({
        background: 'https://webneel.com/daily/sites/default/files/images/daily/09-2013/12-fantasy-woman-digital-painting-by-sakimichan.jpg',
        link: '#',
        title: `title ${i}`
      })
    }
  }

}
