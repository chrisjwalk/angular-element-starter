import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedComponentsService {
  constructor() { }

  getData() {
    return [
      {id: 1, title: 'one'},
      {id: 2, title: 'two'},
      {id: 3, title: 'three'},
      {id: 4, title: 'four'},
      {id: 5, title: 'five'}
    ];
  }
}
