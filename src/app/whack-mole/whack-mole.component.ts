import {
  Component,
  ViewChildren,
  QueryList,
  AfterViewInit,
  Renderer2,
} from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-whack-mole',
  templateUrl: './whack-mole.component.html',
  styleUrls: ['./whack-mole.component.scss'],
})
export class WhackMoleComponent implements AfterViewInit {
  @ViewChildren('holes') holes: QueryList<any>;

  counter: boolean;
  count: number;
  gameTime: number;
  holesArray: string | any[];
  lastHole: any;
  peepControl: any;
  remainingTimeInterval: any;
  score: number;
  timeUp: boolean;

  constructor(private renderer: Renderer2) {}

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
    this.gameTime = 10;
    this.score = 0;
    this.count = 3;
    this.timeUp = false;
    this.counter = true;
    this.stopGame();
    this.startCounter();
  }

  startGame(): void {
    this.peep();
    this.remainingTimeInterval = setInterval(() => {
      if (this.gameTime < 1) {
        this.timeUp = true;
        clearInterval(this.remainingTimeInterval);
      } else {
        this.gameTime--;
      }
    }, 1000);
  }

  startCounter(): void {
    let counterControl = setInterval(() => {
      if (this.count < 1) {
        this.counter = false;
        clearTimeout(counterControl);
        this.startGame();
      } else {
        this.count--;
      }
    }, 1000);
  }

  stopGame(): void {
    clearInterval(this.remainingTimeInterval);
    clearTimeout(this.peepControl);

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
      if (!this.timeUp) {
        this.peep();
      }
    }, time);
  }

  addScore(): void {
    this.score++;
  }
}
