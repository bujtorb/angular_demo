import { Directive, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appVariablesControl]',
})
export class VariablesControlDirective {
  isMousDown = false;
  constructor(private renderer: Renderer2) {}

  @HostListener('window:change', ['$event'])
  @HostListener('window:mousemove', ['$event'])
  handleChange(event) {
    if (this.isMousDown) {
      const name = event.target.name;
      const value = event.target.value;
      const img = document.querySelector('.img');
      if (name === 'filter') {
        this.renderer.setStyle(img, `${name}`, `blur(${value}px)`);
      } else if (name === 'background') {
        this.renderer.setStyle(img, `${name}`, `${value}`);
      }
      this.renderer.setStyle(img, `${name}`, `${value}px`);
    }
  }

  @HostListener('window:change', ['$event'])
  @HostListener('window:mousedown', ['$event'])
  mouseDown(e) {
    this.isMousDown = true;
    this.handleChange(e);
  }

  @HostListener('window:mouseup', ['$event'])
  @HostListener('window:mouseout', ['$event'])
  mouseUp() {
    this.isMousDown = false;
  }
}
