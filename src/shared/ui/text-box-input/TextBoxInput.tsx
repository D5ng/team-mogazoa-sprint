import { forwardRef, TextareaHTMLAttributes } from 'react'

interface TextBoxInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  placeholder?: string
  rows?: number
}

const TextBoxInput = forwardRef<HTMLTextAreaElement, TextBoxInputProps>(
  ({ name, placeholder, rows = 4, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        <label htmlFor={name} className="sr-only">
          {name}
        </label>
        <textarea
          id={name}
          name={name}
          ref={ref}
          placeholder={placeholder}
          rows={rows}
          className={`input-base ${props.className || ''}`}
          {...props}
        />
      </div>
    )
  },
)

TextBoxInput.displayName = 'TextareaInput'

export default TextBoxInput
