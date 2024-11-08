import { Component, OnInit } from '@angular/core';
import { CardItem } from 'src/app/models/CardItem.model';
import { ContentLoaderService } from 'src/app/services/content-loader.service';
import { FilterFieldComponent } from '../../components/filter-field/filter-field.component';
import { MansoryComponent } from '../../components/mansory/mansory.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { getTypeCardLabel, TypeCard } from 'src/app/models/TypeCard.enum';
import { ContentResponse } from 'src/app/models/ContentResponse.model';

@Component({
  selector: 'lore-home',
  standalone: true,
  imports: [
    MenuComponent,
    FilterFieldComponent,
    MansoryComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomePageComponent implements OnInit {

  cards: CardItem[] = []

  constructor(
    private contentService: ContentLoaderService
  ) { }

  ngOnInit(): void {
    this.obterCards()
  }

  obterCards(filter?: (item: CardItem) => boolean): void {
    this.contentService.getMarkdownLinks().subscribe(content => {
      this.cards = content.map(item => ({
        background: `${item.dir}/${item.imagens[0]}`,
        link: item.detail,
        title: this.title(item)
      }))
      if (filter) {
        this.cards = this.cards.filter(filter)
      }
    })
  }

  filter(text: string): void {
    this.obterCards(item => item.title.toLocaleLowerCase().includes(text.toLowerCase()))
  }

  private title(item: ContentResponse) {
    const typeLabel = getTypeCardLabel('pt', item.type)
    return `${typeLabel} - ${item.name}`
  }

  private imagens = [
    "https://i.pinimg.com/564x/bc/92/9a/bc929acfd5d867c805c06dbe8b05855c.jpg",
    "https://i.pinimg.com/236x/72/19/61/7219614a86b8836a33a9696cbdce6196.jpg",
    "https://i.pinimg.com/236x/ae/64/92/ae64920296a08a022910259dbcef426a.jpg",
    "https://i.pinimg.com/236x/3f/c4/71/3fc4714e277a75be25848ddc28ebe26b.jpg",
    "https://i.pinimg.com/564x/c4/b9/72/c4b972b46c3f30a268a5513481d241be.jpg",
    "https://i.pinimg.com/564x/60/5f/42/605f42f7a07288b0ca6fe78a4522de56.jpg",
    "https://i.pinimg.com/564x/ea/b6/86/eab68686a1409bd80d07030c5c5cd6ab.jpg",
    "https://i.pinimg.com/564x/f5/6f/d7/f56fd710af162e131bf3d5c7a669b5ea.jpg",
    "https://i.pinimg.com/564x/45/0d/db/450ddb87bfa465203b3b4501b84e3965.jpg",
    "https://i.pinimg.com/564x/55/03/e4/5503e4a9484fac4c1469d31b711dbeb5.jpg",
    "https://i.pinimg.com/736x/c4/fc/b2/c4fcb22712f22353baeec03fdb95bc95.jpg",
    "https://i.pinimg.com/736x/a8/df/44/a8df443e031b7805db4c51faaf855a41.jpg",
    "https://i.pinimg.com/564x/71/dc/b5/71dcb54e12d6611e96f2556e8813b532.jpg",
    "https://i.pinimg.com/736x/85/2e/21/852e21f4bb7d1bbd1787208b26591161.jpg",
    "https://i.pinimg.com/736x/7b/c4/ad/7bc4ad8e520062926ae485c3687a8523.jpg",
    "https://i.pinimg.com/564x/ee/f3/a3/eef3a377c80d2af2722f76f0ec2a9148.jpg",
    "https://i.pinimg.com/564x/0d/69/f5/0d69f5ffa7c18f2967a92cecfaa9e940.jpg",
    "https://i.pinimg.com/564x/23/46/59/234659432dce1930558e0f2b92acc73d.jpg",
    "https://i.pinimg.com/736x/8c/ce/99/8cce99540ca76ab0d52b3e77354e4817.jpg",
    "https://i.pinimg.com/564x/99/81/b6/9981b6986a8cd7dc0e2bcf5bf3066589.jpg",
    "https://i.pinimg.com/564x/18/18/2b/18182bdf6858c868581080bb77008efe.jpg",
    "https://i.pinimg.com/564x/42/23/56/42235667730e2e738e3be968534ee85e.jpg",
    "https://i.pinimg.com/564x/dd/48/9b/dd489bc80372458fa4f60fbf3e5de6e5.jpg",
    "https://i.pinimg.com/564x/e2/81/fc/e281fc69ffabf7508cad0b04cf1f7455.jpg",
    "https://i.pinimg.com/564x/89/ea/65/89ea65a442f97b64b31d313f63b4f529.jpg",
    "https://i.pinimg.com/564x/21/73/9b/21739b53136a746aa7e7bf96f4d7e66c.jpg",
    "https://i.pinimg.com/564x/7b/53/6e/7b536e443e303e76409e3ee6199b7d8f.jpg",
    "https://i.pinimg.com/564x/cd/1a/2d/cd1a2d9e290b3918d318e84448e1e04e.jpg",
    "https://i.pinimg.com/736x/4e/82/fd/4e82fd058beedca64020aa1017a99e7c.jpg",
    "https://i.pinimg.com/736x/ca/16/6f/ca166ff6b00f33e23502c2305ef60f4a.jpg",
    "https://i.pinimg.com/564x/03/46/9f/03469faa8739a42de237a1e796e2bad1.jpg",
    "https://i.pinimg.com/564x/80/c7/6d/80c76d5e04c51facf469cc1c05990707.jpg"
  ]


}
