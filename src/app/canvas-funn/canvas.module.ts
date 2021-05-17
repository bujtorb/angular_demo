import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanvasFunnComponent } from './canvas-funn.component';
import { RouterModule } from '@angular/router';
import { CanvasRoutes } from './canvas.routes';

@NgModule({
  declarations: [CanvasFunnComponent],
  imports: [
    CommonModule,
     RouterModule.forChild(CanvasRoutes)
  ],
  providers: [],
})
export class AppCanvasModule {}