import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

buttons = [
  {name: 'Drumkit', root: 'drumkit'},
  {name: 'Clock', root: 'clock'},
  {name: 'Flex Panels', root: 'flex'},
  {name: 'Canvas Funn', root: 'canvas'},
  {name: 'CSS Variables', root: 'cssvariables'},
  {name: 'Whack-a-mole', root: 'mole'},


];



  constructor() { }

  ngOnInit(): void {
  }

}
