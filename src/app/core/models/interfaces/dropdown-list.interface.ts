import { Lang } from "../types/lang.type"

export interface IDropdownListItem {
  label: string,
  icon?: string,
  image?: string,
  alt?: string,
  value: Lang
}

export interface IDropdownPosition {
  right?: string,
  left?: string,
  top?: string,
  bottom?: string
}