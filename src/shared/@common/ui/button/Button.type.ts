import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  isLoading?: boolean
  design: 'primary' | 'secondary' | 'tertiary'
}
