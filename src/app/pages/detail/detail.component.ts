import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Content } from 'src/app/models/Content.model';
import { ContentLoaderService } from 'src/app/services/content-loader.service';

@Component({
  selector: 'lore-detail',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.sass'
})
export class DetailComponent implements OnInit {

  content: Content = {
    lore: '',
    name: '',
    stats: {}
  }

  constructor(
    private contentService: ContentLoaderService,
    private activate: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activate.params.subscribe(({ content }) => {
      const path = `assets/content/creatures/${content}.md`
      this.contentService.getMarkdownContent(path).subscribe(content => {
        this.content = this.toContent(content)
      })
    })
  }

  toContent(markdown: string): Content {
    const sections = markdown.split(/^---$/gm).map((section) => section.trim())

    const data: Content = {
      lore: '',
      name: '',
      stats: {}
    } 

    sections.forEach((section, index) => {
      const lines = section.split('\n').map(line => line.trim())
      if (index === 0) {
        data.name = lines[0];
      } else if (/Ficha \(D20\)/i.test(lines[0])) {
        data.stats['D20'] = lines.slice(1).join('\n')
      } else if (/Ficha \(3D&T\)/i.test(lines[0])) {
        data.stats['3D&T'] = lines.slice(1).join('\n')
      } else if (/Lore/i.test(lines[0])) {
        data.lore = lines.slice(1).join('\n')
      }
    })

    return data
  }

}
