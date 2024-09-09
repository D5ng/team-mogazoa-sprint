import { useForm } from 'react-hook-form'
import { ImageInput, TextFieldInput } from '@shared/ui'

export default function () {
  const { register, setValue } = useForm()

  return (
    <div className="flex h-40">
      <div className="flex flex-1 flex-col gap-5 max-w-full h-full">
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
      <ImageInput
        {...register('productImage')}
        setValue={setValue}
        className="flex-1"
      />
    </div>
  )
}
