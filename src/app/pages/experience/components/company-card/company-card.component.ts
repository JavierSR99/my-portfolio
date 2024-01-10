import { Component, OnInit, Input } from '@angular/core';
import { ICompaniesCard } from 'src/app/core/models/interfaces/companies-card.interface';

@Component({
  selector: 'jav-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit {

  @Input() data: ICompaniesCard = {
    title: '',
    logo: '',
    description: '',
    timeline : ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
