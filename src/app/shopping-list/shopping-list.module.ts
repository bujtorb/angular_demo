import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { shopRoutes } from './shopping-list.routes';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShopComponent } from './shop/shop.component';
import { StoreModule } from '@ngrx/store';
import { coreReducer } from './store/reducer';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ShoppingListComponent, ShopComponent ],
  imports: [
    CommonModule,
    FormsModule, 
     RouterModule.forChild(shopRoutes),
     StoreModule.forRoot({ shoppingItem: coreReducer })
  ],
  providers: [],
})
export class AppShopModule {}