import { createAction, props } from '@ngrx/store';
import { IShoppingItem } from '../interface/shoppingItem.interface';

export const addItem = createAction(
  '[Shop] Add item',
  props<{
    item: IShoppingItem;
  }>()
);
export const Remove = createAction('[Shop] Remove', props<{ id: string }>());

export const Toggle = createAction('[Shop] Toggle', props<{ id: string }>());
