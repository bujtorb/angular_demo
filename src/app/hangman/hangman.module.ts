import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HangmanComponent } from './hangman.component';
import { hangmanRoutes } from './hangman.routes';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [HangmanComponent, GameComponent],
  imports: [CommonModule, RouterModule.forChild(hangmanRoutes)],
  providers: [],

})
export class AppHangmanModule {}
