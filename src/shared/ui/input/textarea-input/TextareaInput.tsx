import { forwardRef } from 'react'
import { TextareaInputProps } from './TextareaInput.type'

const TextareaInput = forwardRef<HTMLTextAreaElement, TextareaInputProps>(
  ({ placeholder, name, value, maxLength = 500, errors, ...props }, ref) => {
    const textLength = value ? value.length : 0

    const error = errors[name]

    const focusClassName = error
      ? ''
      : 'focus:ring-1 focus:ring-indigo focus:border-indigo'
    const borderClassName = error ? 'border-red' : 'border-black-70'

    return (
      <div
        className={`relative w-full h-[160px] mobile:h-[120px] ${props.className || ''}`}
      >
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`input-base resize-none overflow-y-auto ${focusClassName} ${borderClassName} ${props.className || ''}`}
          ref={ref}
          {...props}
        />
        <span className="absolute right-5 bottom-5 text-sm text-black-30">
          {textLength}/{maxLength}
        </span>
        <p className="text-red text-xs">{error && error.message}</p>
      </div>
    )
  },
)

TextareaInput.displayName = 'TextareaInput'

export default TextareaInput
