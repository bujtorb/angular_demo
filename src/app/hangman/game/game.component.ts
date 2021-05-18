import { Component, OnInit } from '@angular/core';

import { Game } from 'src/app/hangman/models/game.model';
import { StorageService } from 'src/app/shared/storage.service';
import { Words } from '../helpers/words';
import { ABC } from '../helpers/abc';
import { GlobalConstants } from '../helpers/globals';
import { Button } from '../models/buttons.model';

@Component({
  selector: 'app-hangman-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  game: Game;
  buttons: Button[];
  win: boolean;
  gameEnd: boolean;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.createButtons();
    this.setUpGame();
  }

  createButtons(): void {
    this.buttons = [];
    for (let i = 0; i < ABC.length; i++) {
      this.buttons.push(new Button(i, ABC[i], false));
    }
  }

  setUpGame() {
    const storedGame = this.storageService.get('hangman');
    const storedButtons = this.storageService.get('hangmanLetters');
    if (storedGame && storedButtons) {
      this.game = new Game(
        storedGame.wordToGuess,
        storedGame.playerGuess,
        storedGame.steps,
        storedGame.errorSteps
      );
      this.buttons = storedButtons;
    } else {
      const errorSteps = GlobalConstants.errorSteps;
      const steps = GlobalConstants.steps;
      let wordToGuess = [];
      const playerGuess = [];
      this.resetButons();
      const selectedWord = this.pickWord();
      wordToGuess = [...selectedWord];
      wordToGuess.forEach((e) => playerGuess.push('_'));
      this.game = new Game(wordToGuess, playerGuess, steps, errorSteps);
      this.saveGameToLocalStorage();
    }
  }

  onButtonClicked(button: Button): void {
    this.buttons[this.buttons.findIndex((b) => b.id === button.id)].clicked =
      true;
    this.searchLetter(button.letter);
  }

  resetButons() {
    this.buttons.forEach((e) => (e.clicked = false));
  }

  pickWord(): string {
    return Words[Math.floor(Math.random() * Words.length)];
  }

  searchLetter(letter: string): void {
    const result = [];
    this.game.wordToGuess.forEach((e, index) =>
      e.toLowerCase() === letter.toLowerCase() ? result.push(index) : null
    );
    if (result.length > 0) {
      this.updatePlayerGuess(result, letter);
    } else {
      this.game.incErroSteps();
    }
    this.saveGameToLocalStorage();
  }

  updatePlayerGuess(result: string[], letter: string): void {
    for (let i = 0; i < result.length; i++) {
      this.game.playerGuess[result[i]] = letter;
    }
  }

  newGame(): void {
    this.storageService.resetItem('hangmanLetters');
    this.storageService.resetItem('hangman');
    this.setUpGame();
  }

  saveGameToLocalStorage(): void {
    this.storageService.store('hangmanLetters', this.buttons);
    this.storageService.store('hangman', this.game);
  }
}
