import type { TextFieldInputProps } from '@/src/shared/ui/input/text-field-input/TextFieldInput.type'

export default function TextFieldInput({
  placeholder,
  setValue
  ...props
}: TextFieldInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('input', e.target.value)
  }

  return (
    <div className={`relative w-full ${props.className || ''}`}>
      <input
        onChange={handleInputChange}
        placeholder={placeholder}
        className="input-base"
        {...props}
      />
    </div>
  )
}
