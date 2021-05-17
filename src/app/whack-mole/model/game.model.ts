import { IGame } from "../interface/game.interface";

export class Game {
    gameTime: number; 
    score: number;
    timeUp: boolean;

    constructor(game: IGame) {
        this.gameTime = game.gameTime
        this.score = game.score;
        this.timeUp = game.timeUp;
    }
}