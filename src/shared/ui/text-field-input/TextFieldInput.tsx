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
        className="w-full h-full px-5 rounded-lg text-white bg-black-60 border border-black-70 focus:ring-1 focus:ring-indigo focus:border-indigo placeholder:text-black-30 caret-white"
      />
    </div>
  )
}
