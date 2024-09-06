import { ReactNode } from 'react'

export type DropdownVariantType = 'border' | 'none'

export interface DropdownProps {
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

export interface DropdownMenuItemProps {
  children: ReactNode
}
