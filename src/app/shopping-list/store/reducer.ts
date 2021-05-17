import { Action, createReducer, on } from '@ngrx/store';
import { IShoppingItem } from '../interface/shoppingItem.interface';
import { addItem, Remove, Toggle } from './action';

export interface ShopState {
  shoppingItems: IShoppingItem[];
}

const initialState: ShopState = {
  shoppingItems: [],
};

const _coreReducer = createReducer(
  initialState,
  on(addItem, (state, { item }) => ({
    ...state,
    shoppingItems: [...state.shoppingItems, item],
  })),
  on(Remove, (state, { id }) => ({
    ...state,
    shoppingItems: state.shoppingItems.filter(i => i.id !== id)
  })),
  on(Toggle, (state, { id }) => ({
    ...state,
    shoppingItems: state.shoppingItems.map(i => (i.id === id ? { ...i, bought: !i.bought } : i))
}))
);

export function coreReducer(state: ShopState, action: Action): ShopState {
  return _coreReducer(state, action);
}
