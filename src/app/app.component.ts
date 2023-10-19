import { Component } from '@angular/core';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'jav-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // #region VARIABLES
  public sidebarStatus: boolean = false;
  // #endregion

  // #region CONSTRUCTOR & LIFECYCLE HOOKS
  constructor(private _ls: LanguageService) {
    _ls.setInitialLanguage();
  }
  // #endregion

  // #region METHODS
  /**
   * Show/hide sidebar in responsive structure (only small devices)
   * @param value 
   */
  public switchSidebarStatus(value: boolean): void {
    this.sidebarStatus = value;
  }
  // #endregion

}
