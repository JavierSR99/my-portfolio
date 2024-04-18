import { Component, OnInit } from '@angular/core';
import { ISites } from 'src/app/core/models/interfaces/sites.interface';

@Component({
  selector: 'jav-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public sites: ISites[] = [
    {
      name : 'YouTube',
      logo : 'bi-youtube',
      link : 'https://www.youtube.com/@CodigoJS',
      bgColor : '#C4302B'
    },
    {
      name : 'LinkedIn',
      logo : 'bi-linkedin',
      link : 'https://www.linkedin.com/in/javier-sanz-roa-b30163198',
      bgColor : '#0E76A8 '
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
