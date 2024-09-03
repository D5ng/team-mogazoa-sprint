import type { ReactNode } from 'react'

import type {
  UseFormRegister,
  FieldErrors,
  RegisterOptions,
} from 'react-hook-form'

export interface FormFieldContextValue {
  name: string
  register: UseFormRegister<any>
  errors: FieldErrors
}

export interface FormFieldProps {
  name: string
  register: UseFormRegister<any>
  errors: FieldErrors
  validation?: RegisterOptions
  children: React.ReactNode
}

export interface LabelProps {
  children: ReactNode
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
