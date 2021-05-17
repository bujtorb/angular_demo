import {
  Component,
  ViewChildren,
  QueryList,
  AfterViewInit,
  Renderer2,
} from '@angular/core';
import { Game } from './model/game.model';

@Component({
  selector: 'app-whack-mole',
  templateUrl: './whack-mole.component.html',
  styleUrls: ['./whack-mole.component.scss'],
})
export class WhackMoleComponent implements AfterViewInit {
  @ViewChildren('holes') holes: QueryList<any>;

  counter: boolean;
  count: number;
  game: Game;
  holesArray: string | any[];
  lastHole: any;
  counterControl: any;
  peepControl: any;
  remainingTimeInterval: any;


  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.holesArray = this.holes.toArray();
  }

  randomTime(min, max): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  randomHole(): any {
    const idx = Math.floor(Math.random() * this.holesArray.length);
    const hole = this.holesArray[idx];

    if (hole === this.lastHole) {
      return this.randomHole();
    }

    this.lastHole = hole;
    return hole;
  }

  initGame(): void {
    this.count = 3;
    this.counter = true;
    this.game = new Game({gameTime:10, score:0, timeUp:false});
    this.stopGame();
    this.startCounter();
  }

  startCounter(): void {
    this.counterControl = setInterval(() => {
      if (this.count < 1) {
        this.counter = false;
        clearTimeout(this.counterControl);
        this.startGame();
      } else {
        this.count--;
      }
    }, 1000);
  }

  startGame(): void {
    this.peep();
    this.remainingTimeInterval = setInterval(() => {
      if (this.game.gameTime < 1) {
        this.game.timeUp = true;
        clearInterval(this.remainingTimeInterval);
      } else {
        this.game.gameTime--;
      }
    }, 1000);
  }

  stopGame(): void {
    clearInterval(this.counterControl);
    clearInterval(this.remainingTimeInterval);
    clearTimeout(this.peepControl);

    if(this.holesArray.length<1){
      return;
    }
    for (let item of this.holesArray) {
      this.renderer.removeClass(item.nativeElement, 'up');
    }
  }

  peep(): void {
    const time = this.randomTime(500, 2000);
    const hole = this.randomHole();
    this.renderer.addClass(hole.nativeElement, 'up');

    this.peepControl = setTimeout(() => {
      this.renderer.removeClass(hole.nativeElement, 'up');
      if (!this.game.timeUp) {
        this.peep();
      }
    }, time);
  }

  addScore(): void {
    this.game.score++;
  }
}
