import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  isLoading = true;

  @ViewChild('secondHand', { static: false }) secondHand: ElementRef;
  @ViewChild('minutesHand', { static: false }) minutesHand: ElementRef;
  @ViewChild('hourHand', { static: false }) hourHand: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    setInterval(() => {
      this.setDate();
    }, 1000);

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  setDate(): void {
    const now = new Date();

    const sec = now.getSeconds();
    const secDeg = (sec / 60) * 360 + 90;
    this.renderer.setStyle(
      this.secondHand.nativeElement,
      'transform',
      `rotate(${secDeg}deg)`
    );
    const min = now.getMinutes();
    const minDeg = (min / 60) * 360 + 90;
    this.renderer.setStyle(
      this.minutesHand.nativeElement,
      'transform',
      `rotate(${minDeg}deg)`
    );

    const hour = now.getHours();
    const hourDeg = (hour / 60) * 360 + 90;
    this.renderer.setStyle(
      this.hourHand.nativeElement,
      'transform',
      `rotate(${hourDeg}deg)`
    );

    if (secDeg === 90 || minDeg === 90 || hourDeg === 90) {
      this.renderer.setStyle(
        this.secondHand.nativeElement,
        'transition',
        'none'
      );
      this.renderer.setStyle(
        this.minutesHand.nativeElement,
        'transition',
        'none'
      );
      this.renderer.setStyle(this.hourHand.nativeElement, 'transition', 'none');
    } else {
      this.renderer.setStyle(this.secondHand.nativeElement, 'transition', '');
      this.renderer.setStyle(this.minutesHand.nativeElement, 'transition', '');
      this.renderer.setStyle(this.hourHand.nativeElement, 'transition', '');
    }
  }
}
