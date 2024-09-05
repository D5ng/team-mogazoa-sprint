import { forwardRef, useState } from 'react'
import { TextBoxInputProps } from './TextBoxInput.type'

const TextBoxInput = forwardRef<HTMLTextAreaElement, TextBoxInputProps>(
  (
    { name, placeholder, rows = 4, maxLength = 500, onChange, ...props },
    ref,
  ) => {
    const [charCount, setCharCount] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value
      setCharCount(newValue.length)
      onChange?.(e)
    }

    return (
      <div className="relative w-full space-y-2">
        <label htmlFor={name} className="sr-only">
          {name}
        </label>
        <textarea
          id={name}
          name={name}
          ref={ref}
          placeholder={placeholder}
          rows={rows}
          maxLength={maxLength}
          className={`input-base ${props.className || ''}`}
          onChange={handleChange}
          {...props}
        />
        <span className="absolute right-5 bottom-5 text-sm text-black-30">
          {charCount}/{maxLength}
        </span>
      </div>
    )
  },
)

TextBoxInput.displayName = 'TextBoxInput'

export default TextBoxInput
