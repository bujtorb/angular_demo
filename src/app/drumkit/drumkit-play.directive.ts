import { Directive, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDrumkitPlay]'
})
export class DrumkitPlayDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    console.log(event);

    let audio: any;
    let key: any;

    if (event != null) {
      audio = this.elementRef.nativeElement.querySelector(`audio[data-key="${event.key}"]`);
      key =  this.elementRef.nativeElement.querySelector(`.key[data-key="${event.key}"]`);
      console.log(key)  
    }

    if (!audio) {
        return;
    }

    this.renderer.addClass(key, 'playing');
    audio.currentTime = 0;
    audio.play();
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    const key =  this.elementRef.nativeElement.querySelector(`.key[data-key="${event.key}"]`);
    console.log(key)
    this.renderer.removeClass(key, 'playing');
  }

}
