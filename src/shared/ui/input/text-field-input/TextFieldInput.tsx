import { forwardRef } from 'react'
import type { TextFieldInputProps } from '@shared/ui/input/text-field-input/TextFieldInput.type'

const TextFieldInput = forwardRef<HTMLInputElement, TextFieldInputProps>(
  ({ placeholder, setValue, name, ...props }, ref) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(name, e.target.value)
    }

    return (
      <div className={`relative w-full h-full ${props.className || ''}`}>
        <input
          id={name}
          name={name}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="input-base"
          ref={ref}
        />
      </div>
    )
  },
)

TextFieldInput.displayName = 'TextFieldInput'

export default TextFieldInput
