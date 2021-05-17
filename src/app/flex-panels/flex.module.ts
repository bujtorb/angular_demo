import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexPanelsComponent } from './flex-panels.component';
import { flexRoutes } from './flex.routes';


@NgModule({
  declarations: [FlexPanelsComponent, ],
  imports: [
    CommonModule,
     RouterModule.forChild(flexRoutes)
  ],
  providers: [],
})
export class AppFlexModule {}