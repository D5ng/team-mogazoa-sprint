import { useForm } from 'react-hook-form'
import {
  Button,
  Form,
  ImageInput,
  TextareaInput,
  TextFieldInput,
} from '@shared/ui'

import type { ProductType } from '@shared/types'
import { CategoryDropdown } from '@widgets/product-add-modal/components'
import { useProductForm } from '@widgets/product-add-modal/hooks'
import { defaultValues } from './defaultValues'

export default function ProductAddForm() {
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    reset,
    setError,
  } = useForm<ProductType>({ defaultValues, mode: 'onBlur' })

  const description = watch('description')

  const onSubmit = useProductForm({
    onSuccess: () => reset(),
    onFailed: (field: keyof ProductType, errorMessage: string) =>
      setError(field, { message: errorMessage }),
  })

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-5 my-[40px] tablet:gap-y-[15px] mobile:gap-y-2.5 mobile:my-5"
    >
      <div className="flex items-center gap-x-5 tablet:gap-x-[15px] mobile:flex-col-reverse mobile:items-start mobile:gap-y-2.5">
        <div className="flex flex-col gap-y-5 tablet:gap-y-[15px] mobile:w-full mobile:gap-y-2.5">
          <TextFieldInput
            placeholder="상품명 (상품 등록 여부를 확인해 주세요)"
            className="h-[70px] tablet:h-[60px] mobile:w-full"
            setValue={setValue}
            {...register('name')}
          />

          <CategoryDropdown control={control} />
        </div>
        <ImageInput
          {...register('image')}
          setValue={setValue}
          className="tablet:w-[135px] tablet:h-[135px] mobile:w-[140px] mobile:h-[140px]"
        />
      </div>
      <TextareaInput
        {...register('description')}
        value={description}
        placeholder="상품 설명을 입력해주세요"
      />
      <Button variant="primary">추가하기</Button>
    </Form>
  )
}
