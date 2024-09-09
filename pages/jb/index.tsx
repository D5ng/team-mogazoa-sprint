import { useForm } from 'react-hook-form'
import { ImageInput, TextFieldInput } from '@shared/ui'

export default function () {
  const { register, setValue } = useForm()

  return (
    <div className="flex">
      <div className="flex flex-col gap-1">
        <TextFieldInput
          placeholder="상품명"
          {...register('textFiledInput')}
          setValue={setValue}
        />
        <TextFieldInput
          placeholder="상품명"
          {...register('textFiledInput')}
          setValue={setValue}
        />
      </div>
      <ImageInput {...register('productImage')} setValue={setValue} />
    </div>
  )
}
