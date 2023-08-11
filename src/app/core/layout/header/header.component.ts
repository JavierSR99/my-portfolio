import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IDropdownListItem, IDropdownPosition } from 'src/app/shared/models/interfaces/dropdown-list.interface';

@Component({
  selector: 'jav-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    // #region VIEWCHILD, HOSTLISTENER
    @ViewChild('flagSection') flagSection!: ElementRef;

    @HostListener('document:click', ['$event'])
    onClick(event: any): void {
        this.flagSection.nativeElement.contains(event.target) ? this.clickLang = true :  this.clickLang = false;
    }
    // #endregion

  // #region READONLY VARIABLES
  public readonly iconVSC: string = '../../../../assets/images/vsc.png';
  public readonly listItems: string[] = [ 'HEADER.FILE', 'HEADER.EDIT', 'HEADER.SELECTION', 'HEADER.TERMINAL', 'HEADER.HELP' ];
  // #endregion

  // #region FLAGS DROPDOWN VARIABLES
  public showLangList: boolean = false;
  public clickLang: boolean = true;
  public flagsPosition: IDropdownPosition = { right: '-10px', top: '29px' };
  public flagsList: IDropdownListItem[] = [
    { label : 'Español', value: 'es', image: '../../../../assets/icons/flags/es.png', alt: 'es' },
    { label : 'English', value: 'en', image: '../../../../assets/icons/flags/en.png', alt: 'en' }
  ];
  // #endregion

  public activeRoute: string = 'Home';
  public activeLang: string = 'es';
  
  // #region CONSTRUCTOR & LIFECYCLE HOOKS
  constructor(private _ts: TranslateService) { }

  ngOnInit(): void {
  }
  // #endregion

  // #region METHODS
  public switchLanguage(value: string | number | boolean): void {
    let newLang = value;
    if (typeof newLang === 'string') {
      this.activeLang = newLang;
      this._ts.use(newLang);
    }
    this.showLangList = false;
  }

  public checkClickLang(value: boolean): void {
    if (value === true) {
      if (!this.clickLang) {
        this.showLangList = false;
      }
    }
  }
  // #endregion

}
