import { forwardRef } from 'react'
import type { TextFieldInputProps } from '@shared/ui/input/text-field-input/TextFieldInput.type'
import ErrorMessage from '@shared/ui/error-message/ErrorMessage'

const TextFieldInput = forwardRef<HTMLInputElement, TextFieldInputProps>(
  ({ placeholder, setValue, name, errors, onBlur, ...props }, ref) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(name, e.target.value)
    }

    const error = errors[name]

    const focusClassName = error
      ? ''
      : 'focus:ring-1 focus:ring-indigo focus:border-indigo'
    const borderClassName = error ? 'border-red' : 'border-black-70'

    return (
      <div className={`relative w-full h-full ${props.className || ''}`}>
        <input
          id={name}
          name={name}
          onChange={handleInputChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`input-base ${focusClassName} ${borderClassName}`}
          ref={ref}
        />
        <ErrorMessage error={error} />
      </div>
    )
  },
)

TextFieldInput.displayName = 'TextFieldInput'

export default TextFieldInput
