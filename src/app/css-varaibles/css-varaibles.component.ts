import { Component, OnInit, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-css-varaibles',
  templateUrl: './css-varaibles.component.html',
  styleUrls: ['./css-varaibles.component.css']
})
export class CssVaraiblesComponent implements OnInit {

  constructor(private  el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

  }

}
