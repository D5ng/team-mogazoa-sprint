import { ReactNode } from 'react'

export interface Dropdown {
  children: ReactNode
}

export type DropdownContextType = {
  isToggle: boolean
  onToggle: () => void
  onOpenToggle: () => void
  onCloseToggle: () => void
  selectedItem: string
  onSelect: (select: any) => void
}

export type DropdownMenuItemType = {
  children: ReactNode
}
