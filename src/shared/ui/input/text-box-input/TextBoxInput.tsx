import { forwardRef } from 'react'
import { TextBoxInputProps } from './TextBoxInput.type'
import { useWatch } from 'react-hook-form'

const TextBoxInput = forwardRef<HTMLTextAreaElement, TextBoxInputProps>(
  (
    { placeholder, control, rows = 4, maxLength = 500, name, ...props },
    ref,
  ) => {
    const value = useWatch({
      control,
      name,
      defaultValue: '',
    })
    const currentLength = value?.length || 0

    return (
      <div className={`relative w-full ${props.className || ''}`}>
        <label htmlFor={name} className="sr-only">
          {name}
        </label>
        <textarea
          id={name}
          placeholder={placeholder}
          rows={rows}
          maxLength={maxLength}
          className={`input-base ${props.className || ''}`}
          ref={ref}
        />
        <span className="absolute right-5 bottom-5 text-sm text-black-30">
          {currentLength}/{maxLength}
        </span>
      </div>
    )
  },
)

TextBoxInput.displayName = 'TextBoxInput'

export default TextBoxInput
