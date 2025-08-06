import { Component, AfterViewInit } from '@angular/core';
import { ICard, ICardColors } from 'src/app/core/models/interfaces/card.interface';
import { ISites } from 'src/app/core/models/interfaces/sites.interface';
import { CARD_DATA } from 'src/app/core/models/constants/card-content.constants';

@Component({
  selector: 'jav-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {

  public readonly cards = CARD_DATA;

  constructor() {}

  ngAfterViewInit(): void {
  }
}
