import { TextareaHTMLAttributes } from 'react'

export interface TextBoxInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  placeholder?: string
  rows?: number
  maxLength: number
}
