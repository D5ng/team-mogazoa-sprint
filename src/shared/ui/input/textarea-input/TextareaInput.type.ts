export interface TextareaInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  value: string
  errors: Record<string, any>
  placeholder?: string
  rows?: number
  maxLength?: number
  className?: string
}
