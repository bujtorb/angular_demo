import {
    createFeatureSelector,
    createSelector
  } from '@ngrx/store';
  import { ShopState } from './reducer';
  
  export const selectCoreFeature = createFeatureSelector<ShopState>(
    'shoppingItem'
  );
  
  export const selectShoppingItem = createSelector(
    selectCoreFeature,
    (state: ShopState) => {
      return state.shoppingItems;
    }
  );
  