import React, { forwardRef } from 'react'
import { TextBoxInputProps } from './TextBoxInput.type'

const TextBoxInput = forwardRef<HTMLTextAreaElement, TextBoxInputProps>(
  ({ placeholder, name, value, maxLength = 500, ...props }, ref) => {
    const charCount = value ? value.length : 0

    return (
      <div className={`relative w-full ${props.className || ''}`}>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={props.rows}
          maxLength={maxLength}
          className={`input-base ${props.className || ''}`}
          ref={ref}
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
