import { ReactNode } from 'react'

export type DropdownVariantProps = 'border' | 'none'

export interface DropdownProps {
  children: ReactNode
  variant?: DropdownVariantProps
}

export type DropdownContextType = {
  isToggle: boolean
  onToggle: () => void
  onOpenToggle: () => void
  onCloseToggle: () => void
  selectedItem: string
  onSelect: (select: any) => void
  variant: DropdownVariantProps
}

export type DropdownMenuItemType = {
  children: ReactNode
}
