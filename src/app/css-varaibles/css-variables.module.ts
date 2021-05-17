import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CssVaraiblesComponent } from './css-varaibles.component';
import { cssvariableRoutes } from './css-variables.routes';
import { VariablesControlDirective } from './variables-control.directive';



@NgModule({
  declarations: [CssVaraiblesComponent, VariablesControlDirective],
  imports: [
    CommonModule,
     RouterModule.forChild(cssvariableRoutes)
  ],
  providers: [],
})
export class AppCssVariablesModule {}