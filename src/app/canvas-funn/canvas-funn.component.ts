import {
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-canvas-funn',
  templateUrl: './canvas-funn.component.html',
  styleUrls: ['./canvas-funn.component.scss'],
})
export class CanvasFunnComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  private isDrawing = false;
  private lastX = 0;
  private lastY = 0;
  private hue = 0;
  private direction = true;

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight;
    this.ctx.strokeStyle = '#BADA55';
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.lineWidth = 100;
  }

  @HostListener('window:mousemove', ['$event'])
  draw(e) {
    if (!this.isDrawing) {
      return;
    }

    this.ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;

    this.ctx.beginPath();
    this.ctx.moveTo(this.lastX, this.lastY);
    this.ctx.lineTo(e.offsetX, e.offsetY);
    this.ctx.stroke();

    [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    this.hue++;
    if (this.hue >= 360) {
      this.hue = 0;
    }

    if (this.ctx.lineWidth >= 100 || this.ctx.lineWidth <= 1) {
      this.direction = !this.direction;
    }
    if (this.direction) {
      this.ctx.lineWidth++;
    } else {
      this.ctx.lineWidth--;
    }

    console.log(e);
  }

  @HostListener('window:mousedown', ['$event'])
  drawing(e) {
    this.isDrawing = true;
    [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
  }

  @HostListener('window:mouseup', ['$event'])
  @HostListener('window:mouseout', ['$event'])
  finished() {
    this.isDrawing = false;
  }
}
