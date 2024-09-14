import { forwardRef } from 'react'
import { TextareaInputProps } from './TextareaInput.type'
import { twMerge } from 'tailwind-merge'
import ErrorMessage from '@/src/shared/ui/error-message/ErrorMessage'

const TextareaInput = forwardRef<HTMLTextAreaElement, TextareaInputProps>(
  ({ placeholder, name, value, maxLength = 500, errors, ...props }, ref) => {
    const textLength = value ? value.length : 0

    const error = errors[name]

    const focusClassName = error
      ? ''
      : 'focus:ring-1 focus:ring-indigo focus:border-indigo'
    const borderClassName = error ? 'border-red' : 'border-black-70'
    26
    return (
      <div className={twMerge('relative w-full ', props.className)}>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`block input-base resize-none overflow-y-auto h-[160px] tablet:text-sm mobile:h-[120px] ${focusClassName} ${borderClassName} ${props.className || ''}`}
          ref={ref}
          {...props}
        />
        <span
          className={`absolute right-5 text-sm text-black-30 ${error ? 'bottom-[calc(36px)]' : 'bottom-5'}`}
        >
          {textLength}/{maxLength}
        </span>
        <ErrorMessage error={error} />
      </div>
    )
  },
)

TextareaInput.displayName = 'TextareaInput'

export default TextareaInput
