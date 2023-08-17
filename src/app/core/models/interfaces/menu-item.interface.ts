import { MenuIcon, MenuItemType } from "../enum/menu-item.enum"

export interface IMenuItem {
  label: string,
  icon: MenuIcon,
  type: MenuItemType,
  link?: string,
  parentOpen?: boolean
}