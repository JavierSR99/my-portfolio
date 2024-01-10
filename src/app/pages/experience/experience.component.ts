import { Component, OnInit } from '@angular/core';
import { COMPANIES } from 'src/app/core/models/constants/companies.constants';
import { ICompaniesCard } from 'src/app/core/models/interfaces/companies-card.interface';

@Component({
  selector: 'jav-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public readonly companies: ICompaniesCard[] = COMPANIES;

  constructor() { }

  ngOnInit(): void {
  }

}
