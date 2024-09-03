import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  isLoading?: boolean
  variant: 'primary' | 'secondary' | 'tertiary'
}
