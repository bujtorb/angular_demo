import { Directive, HostListener, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appVariablesControl]'
})
export class VariablesControlDirective {
   isMousDown = false;
  constructor(private  el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:change', ['$event'])
  @HostListener('window:mousemove', ['$event'])
  handleChange(event) {
    if (this.isMousDown){

        const name = event.target.name;
        const value = event.target.value;
        const suffix =  event.target.attributes.sizing || '';
        const img = document.querySelector('.img');

        console.log(name);
        if (name === 'filter'){
          this.renderer.setStyle(img, `${name}`, `blur(${value}px)`);
        } else if (name === 'background') {
          this.renderer.setStyle(img, `${name}`, `${value}`);
        }
        this.renderer.setStyle(img, `${name}`, `${value}px`);

    }


  }

  @HostListener('window:mousedown', ['$event'])
  mouseDown(e) {
    this.isMousDown = true;

  }

  @HostListener('window:mouseup', ['$event'])
  @HostListener('window:mouseout', ['$event'])
  mouseUp(){
    this.isMousDown = false;
  }

}
