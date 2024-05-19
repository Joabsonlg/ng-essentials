import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {Item} from "../model/item";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  getItems() {
    const items: Item[] = [
      {first: 'John', last: 'Doe', handle: '@johndoe'},
      {first: 'Jane', last: 'Smith', handle: '@janesmith'},
      {first: 'Mark', last: 'Twain', handle: '@marktwain'},
      {first: 'Lucy', last: 'Brown', handle: '@lucybrown'},
      {first: 'Jack', last: 'Black', handle: '@jackblack'},
      {first: 'Tom', last: 'White', handle: '@tomwhite'},
      {first: 'Sara', last: 'Green', handle: '@saragreen'},
      {first: 'Michael', last: 'Blue', handle: '@michaelblue'}
    ];
    return of(items);
  }
}
