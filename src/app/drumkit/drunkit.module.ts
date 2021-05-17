import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DrumkitComponent } from './drumkit.component';
import { DrumkitPlayDirective } from './drumkit-play.directive';
import { drumkitRoutes } from './drumkit.routes';


@NgModule({
  declarations: [DrumkitComponent, DrumkitPlayDirective],
  imports: [
    CommonModule,
     RouterModule.forChild(drumkitRoutes)
  ],
  providers: [],
})
export class AppDrumkitModule {}