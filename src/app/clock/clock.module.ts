import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { clockRoutes } from './clock.routes';

import { ClockComponent } from './clock.component';

@NgModule({
  declarations: [ClockComponent],
  imports: [
    CommonModule,
     RouterModule.forChild(clockRoutes)
  ],
  providers: [],
})
export class AppClockModule {}