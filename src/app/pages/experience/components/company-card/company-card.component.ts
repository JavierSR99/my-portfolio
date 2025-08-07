import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ICompaniesCard } from 'src/app/core/models/interfaces/companies-card.interface';

@Component({
  selector: 'jav-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit {

  // #region HostListener
  @HostListener("window:resize", []) setModalWidth() {
    this.setModalSizeResponsive();
  }
  // #endregion

  // #region INPUTS & OUTPUTS
  @Input() data: ICompaniesCard = {
    title: '',
    logo: '',
    description: '',
    timeline : '',
    techs : []
  };
  // #endregion

  // #region VARIABLES
  public seeMore: boolean = false;

  public modalWidth: string = "60%";
  // #endregion

  // #region CONSTRUCTOR & LIFECYCLE HOOKS
  constructor() { }

  ngOnInit(): void {
    this.setModalSizeResponsive();
  }
  // #endregion

  // #region METHODS
  public showDetails(): void {
    this.seeMore = true;
  }

  public closeDetails(): void {
    this.seeMore = false;
  }

  private setModalSizeResponsive(): void {
    if (window.innerWidth <= 900) {
      this.modalWidth = "90%";
    }
  }
  // #endregion

}
