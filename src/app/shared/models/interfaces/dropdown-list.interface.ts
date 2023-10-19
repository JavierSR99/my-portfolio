export interface IDropdownListItem {
  label: string,
  icon?: string,
  image?: string,
  alt?: string,
  value: string | number | boolean
}

export interface IDropdownPosition {
  right?: string,
  left?: string,
  top?: string,
  bottom?: string
}