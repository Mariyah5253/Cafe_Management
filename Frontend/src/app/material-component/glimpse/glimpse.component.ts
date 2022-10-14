import { Component, OnInit } from '@angular/core';
import { cards,Card } from './../../shared/cardData';

@Component({
  selector: 'app-glimpse',
  templateUrl: './glimpse.component.html',
  styleUrls: ['./glimpse.component.scss']
})
export class GlimpseComponent implements OnInit {
  car:Card[] = cards;
  constructor() { }

  ngOnInit(): void {
  }

}
