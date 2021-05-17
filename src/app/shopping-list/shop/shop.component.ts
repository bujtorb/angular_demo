import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IShoppingItem } from '../interface/shoppingItem.interface';
import { addItem } from '../store/action';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent  {
  newItemName: string = '';
  constructor(private store: Store) {
    
   }

  addItem() {
    const item = {id: uuidv4(), name: this.newItemName, bought: false } as IShoppingItem;
    this.store.dispatch(addItem({item: item}));
    this.newItemName = '';
  }

}
