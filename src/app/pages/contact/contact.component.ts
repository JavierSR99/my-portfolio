import { Component } from '@angular/core';
import { ISites } from 'src/app/core/models/interfaces/sites.interface';

@Component({
  selector: 'jav-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public sites: ISites[] = [
    {
      name : 'GitHub',
      logo : 'bi-github',
      link : 'https://github.com/JavierSR99',
      bgColor : '#1f2328'
    },
    {
      name : 'YouTube',
      logo : 'bi-youtube',
      link : 'https://www.youtube.com/c/C%C3%B3digoJS',
      bgColor : '#C4302B'
    }
  ];

  constructor() {}

}
