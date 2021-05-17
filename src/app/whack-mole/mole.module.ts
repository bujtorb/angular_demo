import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { moleRoutes } from './mole.routes';
import { WhackMoleComponent } from './whack-mole.component';
import { BonkDirective } from './bonk.directive';

@NgModule({
  declarations: [WhackMoleComponent, BonkDirective ],
  imports: [
    CommonModule,
     RouterModule.forChild(moleRoutes)
  ],
  providers: [],
})
export class AppMoleModule {}