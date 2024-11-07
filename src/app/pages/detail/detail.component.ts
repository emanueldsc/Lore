import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { DetailComponent } from 'src/app/components/detail/detail.component';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { Content } from 'src/app/models/Content.model';
import { ContentLoaderService } from 'src/app/services/content-loader.service';

@Component({
  selector: 'lore-detail-page',
  standalone: true,
  imports: [
    CarouselComponent,
    DetailComponent,
    TabsComponent,
    JsonPipe
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.sass'
})
export class DetailPageComponent implements OnInit {

  content: Content = {
    name: '',
    images: [],
    lore: '',
    stats: {}
  }

  constructor(
    private contentService: ContentLoaderService,
    private activate: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activate.params.subscribe(({ content }) => {
      const path = `assets/content/creatures/${content}/${content}.md`
      this.contentService.getMarkdownContent(path).subscribe(markdown => {
        this.content = this.toContent(markdown, content)
      })
    })
  }

  toContent(markdown: string, content: string): Content {
    const sections = markdown.split(/^---$/gm).map((section) => section.trim())

    const data: Content = {
      name: '',
      images: [],
      lore: '',
      stats: {}
    } 

    sections.forEach((section, index) => {
      const lines = section.split('\n').map(line => line.trim())
      if (index === 0) {
        data.name = lines[0];
        const imageUrls = lines.slice(1)
          .filter(line => line.startsWith('!['))
          .map(line => {
            const match = line.match(/\((.*?)\)/)
            return match ? match[1].replace('../../', 'assets/') : null
          })
          .filter(url => url) as string[]
        data.images = imageUrls.map(img => `assets/content/creatures/${content}/${img}`)
      } else if (/Ficha \(D20\)/i.test(lines[0])) {
        data.stats['D20'] = this.parseSectionAsJson(lines.slice(1))
      } else if (/Ficha \(3D&T\)/i.test(lines[0])) {
        data.stats['3D&T'] = this.parseSectionAsJson(lines.slice(1))
      } else if (/Lore/i.test(lines[0])) {
        data.lore = lines.slice(1).join('\n') 
      }
    })

    return data
  }

  private parseSectionAsJson(lines: string[]): { [key: string]: string } {
    const jsonData: { [key: string]: string } = {}; // Define o tipo explicitamente
  
    lines.forEach(line => {
      const [key, value] = line.split(':').map(part => part.trim());
      if (key && value !== undefined) {
        const cleanKey = key.replace(/[^a-zA-Z0-9]/g, '')
        jsonData[cleanKey] = value;
      }
    });
  
    return jsonData;
  }
  

}
