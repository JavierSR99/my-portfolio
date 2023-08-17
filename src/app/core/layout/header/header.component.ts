import { Component, OnInit, ViewChild, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { IDropdownListItem, IDropdownPosition } from 'src/app/shared/models/interfaces/dropdown-list.interface';
import { Subscription } from 'rxjs';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'jav-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

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

  // #region VARIABLES
  public activeRoute: string = 'Home';
  public activeLang!: string;
  

  private listObservers$: Array<Subscription> = [];
  // #endregion
  
  // #region CONSTRUCTOR & LIFECYCLE HOOKS
  constructor(private _ls: LanguageService, private _ts: TranslateService, private _rs: RouteService) {}

  ngOnInit(): void {
    const observableLang$ = this.getInitialLang();
    const observableRoute$ = this.getActiveRoute();

    this.listObservers$ = [observableLang$, observableRoute$];
  }

  ngOnDestroy() {
    this.listObservers$.forEach(u => u.unsubscribe());
  }
  // #endregion

  // #region METHODS
  public getInitialLang(): Subscription {
    return this._ls.activeLanguage$.subscribe((res) => {
      this.activeLang = res;
    },
    err => {
      this.activeLang = 'es';
    });
  }

  public getActiveRoute(): Subscription {
    return this._rs.activeRoute$.subscribe((res) => {
      this.activeRoute = res;
    });
  }

  public switchLanguage(value: string | number | boolean): void {
    let newLang = value;
    if (typeof newLang === 'string') {
      this.activeLang = newLang;
      this._ts.use(newLang);
      this._ls.setActiveLang(newLang);
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
