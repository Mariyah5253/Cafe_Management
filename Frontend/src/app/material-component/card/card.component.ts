import { Component, Input, OnInit } from '@angular/core';
import {Card} from './../../shared/cardData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() props! : Card 
  constructor() { }

  ngOnInit(): void {
  }

}
