import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IShoppingItem } from '../interface/shoppingItem.interface';
import { Remove, Toggle } from '../store/action';
import { selectShoppingItem } from '../store/sellector';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  shoppingItems$: Observable<IShoppingItem[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(selectShoppingItem);

  }

  removeItem(item: IShoppingItem) {
    const id = item.id;
    this.store.dispatch(Remove({id}));
  }

  toggleItem(item: IShoppingItem) {
    const id = item.id;
    this.store.dispatch(Toggle({id}));
  }

}
