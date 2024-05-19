import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {DataService} from "../../service/dataService";
import {Item} from "../../model/item";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent {
  items: Item[] = [];
  paginatedItems: Item[] = [];
  searchTerm = '';
  currentPage = 1;
  pageSize = 5;
  totalPages = 1;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.dataService.getItems().subscribe(data => {
      this.items = data;
      this.applyFilters();
    });
  }

  applyFilters() {
    let filteredItems = this.items;
    if (this.searchTerm) {
      filteredItems = filteredItems.filter(item =>
        item.first.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.last.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.handle.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.totalPages = Math.ceil(filteredItems.length / this.pageSize);
    this.paginateItems(filteredItems);
  }

  paginateItems(filteredItems: Item[]) {
    const start = (this.currentPage - 1) * this.pageSize;
    this.paginatedItems = filteredItems.slice(start, start + this.pageSize);
  }

  searchItems() {
    this.currentPage = 1;
    this.applyFilters();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.applyFilters();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.applyFilters();
    }
  }
}
