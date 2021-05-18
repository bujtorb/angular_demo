import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  //stores data in local storage
  store(name: string, data: any) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  // gets data from local storage
  get(name: string) {
    const data = JSON.parse(localStorage.getItem(name));
    return data;
  }

  //reset data in local storage
  resetItem(item: string) {
    localStorage.removeItem(item);
  }
}
