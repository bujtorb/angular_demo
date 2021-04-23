import { Component, OnInit, ViewChildren, QueryList, ElementRef, ViewChild, AfterViewInit, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-whack-mole',
  templateUrl: './whack-mole.component.html',
  styleUrls: ['./whack-mole.component.scss']
})
export class WhackMoleComponent implements OnInit, AfterViewInit {


  @ViewChildren('holes') holes: QueryList<any>;


lastHole: any;
score = 0;
timeUp: boolean;
holesArray: string | any[];
  constructor( private renderer: Renderer2, private el: ElementRef ) { }
  ngAfterViewInit(): void {
     console.log(this.holes.toArray());
     this.holesArray = this.holes.toArray();
  }

  ngOnInit(): void {

  }

  randomTime(min, max): number{
    return Math.round( Math.random() * (max - min) + min);
  }

  randomHole(): any{
    const idx = Math.floor(Math.random() * this.holesArray.length);
    const hole = this.holesArray[idx];

    if (hole === this.lastHole){
      return this.randomHole();
    }

    this.lastHole = hole;
    return hole;
    }

  startGame(): void {
    this.score = 0;
    this.timeUp = false;
    this.peep();
    setTimeout(() => this.timeUp = true, 10000);
  }

   peep(): void{

    const time = this.randomTime(500, 2000);
    const hole = this.randomHole();
    this.renderer.addClass(hole.nativeElement, 'up');

    setTimeout(() => {
      this.renderer.removeClass(hole.nativeElement, 'up');
      if (!this.timeUp)
       {this. peep(); }
    }, time);
  }

  addScore(args): void{
  this.score++;
  }


}
