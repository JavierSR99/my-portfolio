import { Component, OnInit } from '@angular/core';
import { MenuIcon, MenuItemType } from 'src/app/core/models/enum/menu-item.enum';
import { IMenuItem } from 'src/app/core/models/interfaces/menu-item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'jav-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  // #region VARIABLES
  public menuItems: IMenuItem[] = [
    { label: 'Pages', icon: MenuIcon.folder, type: MenuItemType.parent, parentOpen: true },
    { label: 'HOME', icon: MenuIcon.html, type: MenuItemType.child, link: '/' },
    { label: 'CONTACT', icon: MenuIcon.scss, type: MenuItemType.child, link: '/contact' },
    { label: 'Core', icon: MenuIcon.foldercheck, type: MenuItemType.parent, parentOpen: false },
    { label: 'Shared', icon: MenuIcon.foldercheck, type: MenuItemType.parent, parentOpen: false }
  ];
  // #endregion

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public goToRoute(item: IMenuItem): void {
    if (item.link) {
      this._router.navigate([item.link]);
    }
  }

}
