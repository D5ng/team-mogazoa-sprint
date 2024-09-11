import type { ReactNode } from 'react'

import type { ChangeHandler } from 'react-hook-form'

export type FormFieldContextValue = {
  name: string
  onChange: ChangeHandler
  onBlur: ChangeHandler
  errors: Record<string, any>
}

export type FormFieldProps = FormFieldContextValue & {
  children: React.ReactNode
}

export interface LabelProps {
  children: ReactNode
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface EyeProps {
  isToggle: boolean
  onToggle: () => void
}
