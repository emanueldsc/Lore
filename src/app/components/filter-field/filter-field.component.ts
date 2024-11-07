import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lore-filter-field[search]',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './filter-field.component.html',
  styleUrl: './filter-field.component.sass'
})
export class FilterFieldComponent {
  searchTerm: string = '';

  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.searchTerm);
  }
}
