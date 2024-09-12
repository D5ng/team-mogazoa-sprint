import { forwardRef } from 'react'
import { TextareaInputProps } from './TextareaInput.type'
import { twMerge } from 'tailwind-merge'

const TextareaInput = forwardRef<HTMLTextAreaElement, TextareaInputProps>(
  ({ placeholder, name, value, maxLength = 500, ...props }, ref) => {
    const textLength = value ? value.length : 0

    return (
      <div
        className={twMerge(
          'relative w-full h-[160px] mobile:h-[120px]',
          props.className,
        )}
      >
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          className={twMerge(
            'input-base resize-none overflow-y-auto tablet:text-sm',
            props.className || '',
          )}
          ref={ref}
          {...props}
        />
        <span className="absolute right-5 bottom-5 text-sm text-black-30">
          {textLength}/{maxLength}
        </span>
      </div>
    )
  },
)

TextareaInput.displayName = 'TextareaInput'

export default TextareaInput
