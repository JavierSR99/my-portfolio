import { MenuIcon, MenuItemType } from "../enum/menu-item.enum";
import { IMenuItem } from "../interfaces/menu-item.interface";

export const MENU_ITEMS: IMenuItem[] = [
  { label: 'Pages', icon: MenuIcon.folder, type: MenuItemType.parent, parentOpen: true },
  { label: 'HOME', icon: MenuIcon.html, type: MenuItemType.child, link: '/' },
  { label: 'CV', icon: MenuIcon.scss, type: MenuItemType.child, link: '/cv' },
  { label: 'CONTACT', icon: MenuIcon.scss, type: MenuItemType.child, link: '/contact' },
  { label: 'Core', icon: MenuIcon.foldercheck, type: MenuItemType.parent, parentOpen: false },
  { label: 'Shared', icon: MenuIcon.foldercheck, type: MenuItemType.parent, parentOpen: false }
];