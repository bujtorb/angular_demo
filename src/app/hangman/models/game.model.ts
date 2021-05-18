import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

export class Game {
  wordToGuess: string[];
  playerGuess: string[];
  steps: number;
  errorSteps: number;

  constructor(
    wordToGuess: string[],
    playerGuess: string[],
    steps: number,
    errorSteps: number
  ) {
    this.wordToGuess = wordToGuess;
    this.playerGuess = playerGuess;
    this.steps = steps;
    this.errorSteps = errorSteps;
  }

  remainingSteps(): number {
    return this.steps - this.errorSteps;
  }

  incErroSteps(): void {
    this.errorSteps++;
  }

  resetErrorSteps(): void {
    this.errorSteps = 0;
  }

  checkWin(): boolean {
    if (this.wordToGuess.toString() === this.playerGuess.toLocaleString()) {
      return true;
    }
    return false;
  }
}
