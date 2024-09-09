import { UseFormRegisterReturn, Control } from 'react-hook-form'

export interface TextBoxInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: UseFormRegisterReturn
  control: Control<any>
  placeholder?: string
  rows?: number
  maxLength?: number
}
