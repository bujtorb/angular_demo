import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-panels',
  templateUrl: './flex-panels.component.html',
  styleUrls: ['./flex-panels.component.scss'],
})
export class FlexPanelsComponent {
  items = [
    {
      topText: 'Hey',
      middleText: "Let 's",
      bottomText: 'Dance',
      active: false,
    },
    {
      topText: 'Give',
      middleText: 'Take',
      bottomText: 'Receive',
      active: false,
    },
    {
      topText: 'Experience',
      middleText: 'It',
      bottomText: 'Today',
      active: false,
    },
    {
      topText: 'Give',
      middleText: 'All',
      bottomText: 'You can',
      active: false,
    },
    { topText: 'Life', middleText: 'In', bottomText: 'Motion', active: false },
  ];

  toggleClass(item: any): void {
    item.active = !item.active;
  }
}
