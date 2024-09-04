import { ReactNode } from 'react'

export type DropdownVariantType = 'border' | 'none'

export interface Dropdown {
  children: ReactNode
  variant?: DropdownVariantType
}

export type DropdownContextType = {
  isToggle: boolean
  onToggle: () => void
  onOpenToggle: () => void
  onCloseToggle: () => void
  selectedItem: string
  onSelect: (select: any) => void
  variant: DropdownVariantType
}

export type DropdownMenuItemType = {
  children: ReactNode
}
