import type { ReactNode, InputHTMLAttributes } from 'react'
import type {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  Path,
} from 'react-hook-form'

export interface FormFieldContextType<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>
  register: UseFormRegister<TFieldValues>
  error?: string
}

export interface FormFieldProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>
  register: UseFormRegister<TFieldValues>
  errors: FieldErrors<TFieldValues>
  children: ReactNode
}

export interface LabelProps {
  children: ReactNode
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
