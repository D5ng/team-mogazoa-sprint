import { UseFormRegisterReturn, Control } from 'react-hook-form'

export interface TextBoxInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  control: Control<any>
  placeholder?: string
  rows?: number
  maxLength?: number
  className?: string
}
