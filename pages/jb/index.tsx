import { useForm } from 'react-hook-form'
import {
  Button,
  Form,
  ImageInput,
  TextBoxInput,
  TextFieldInput,
} from '@shared/ui'

export default function () {
  const { register, setValue, control } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Form onSubmit={onSubmit} className="flex flex-col gap-5 p-10">
      <div className="flex gap-5 h-40">
        <div className="flex flex-2 flex-col gap-5 max-w-full h-full">
          <TextFieldInput
            placeholder="상품명"
            {...register('textFiledInput')}
            setValue={setValue}
          />
          <TextFieldInput
            placeholder="카테고리 선택"
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
      <TextBoxInput
        {...register('textBoxInput')}
        control={control}
        placeholder="상품 설명을 입력해주세요"
      />
      <Button variant="primary">추가하기</Button>
    </Form>
  )
}
