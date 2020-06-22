import { Directive, HostListener, Renderer2, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appBonk]'
})
export class BonkDirective {
  @Output() scoreOP = new EventEmitter();
  constructor( private renderer: Renderer2) { }


  @HostListener('click', ['$event'])
  bonk(e) {
   e.stopPropagation();
   if (!e.isTrusted) {
     return; }
   const mole = e.target;
   const target = e.target.parentNode;
   this.scoreOP.emit();
   console.log(target);
   this.renderer.removeClass(target, 'up');

 }
}
