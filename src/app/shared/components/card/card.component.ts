import { Component, OnInit, Input } from '@angular/core';
import { ICard, ICardColors } from 'src/app/core/models/interfaces/card.interface';

@Component({
  selector: 'jav-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  //#region INPUTS & OUTPUTS
  @Input() cardInfo: ICard = {
    title: '',
    image: '',
    icon: '',
    description: '',
    name: '',
    link: ''
  };

  @Input() customColors: ICardColors = {
    header: 'black',
    content: 'white'
  };

  @Input() btnType: string = "c-btn";
  //#endregion

  constructor() { }

  ngOnInit(): void {
  }

}
