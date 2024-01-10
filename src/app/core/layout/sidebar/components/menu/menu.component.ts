import { Component, OnInit } from '@angular/core';
import { IMenuItem } from 'src/app/core/models/interfaces/menu-item.interface';
import { NavigationEnd, Router } from '@angular/router';
import { MENU_ITEMS } from 'src/app/core/models/constants/menu-items.constants';

@Component({
  selector: 'jav-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  // #region VARIABLES

  public activeRoute: string = "";

  public readonly menuItems: IMenuItem[] = MENU_ITEMS;
  // #endregion

  constructor(
    private _router: Router
  ) {
    _router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.changeActiveRoute();
      }
    });
  }

  ngOnInit(): void {}

  private changeActiveRoute(): void {
    this.activeRoute = this._router.url;
  }

  public goToRoute(item: IMenuItem): void {
    if (item.link) {
      this._router.navigate([item.link]);
    }
  }

}
