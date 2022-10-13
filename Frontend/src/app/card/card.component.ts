import { Component, OnInit ,Input} from '@angular/core';
import {Card} from './cardData';


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
