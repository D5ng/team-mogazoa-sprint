import { ButtonHTMLAttributes, ReactNode } from 'react'

export type DropdownVariantType = 'border' | 'none'

export interface DropdownProps {
  children: ReactNode
  variant?: DropdownVariantType
  className?: string
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
  id?: number
  onClick?: () => void
  onBlur?: () => void
  className?: string
}

export interface DropdownTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
}
