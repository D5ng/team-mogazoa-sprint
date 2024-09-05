import { useForm } from 'react-hook-form'
import type { TextFieldInputProps } from '@shared/ui/text-field-input/TextFieldInput.type'

export default function TextFieldInput({
  placeholder,
  ...props
}: TextFieldInputProps) {
  const { register, setValue } = useForm()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('input', e.target.value)
  }

  return (
    <div className={`relative w-full ${props.className || ''}`}>
      <input
        {...register('input')}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="input-base"
      />
    </div>
  )
}
