export interface TextareaInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  value: string
  placeholder?: string
  rows?: number
  maxLength?: number
  className?: string
}
