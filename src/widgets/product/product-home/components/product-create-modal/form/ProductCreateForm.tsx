import { useForm } from 'react-hook-form'
import {
  Button,
  CategoryId,
  Form,
  TextareaInput,
  TextFieldInput,
} from '@shared/ui'
import { descriptionValidation, nameValidation } from '@shared/utils'
import { ProductImageUpload } from '@widgets/product/common'
import { CategoryDropdown } from '@widgets/product/common'
import type { ProductPayload } from '@shared/types'
import { useProductAddForm } from '@widgets/product/product-home/hooks'
import { defaultValues } from './defaultValues'

interface ProductAddFormProps {
  onCloseToggle: () => void
  categoryId?: CategoryId
}

export default function ProductAddForm({
  onCloseToggle,
  categoryId,
}: ProductAddFormProps) {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    setError,
  } = useForm<ProductPayload>({
    defaultValues: defaultValues(categoryId),
    mode: 'onTouched',
  })

  const description = watch('description')

  const { onSubmit, isPending } = useProductAddForm({
    onSuccess: () => onCloseToggle(),
    onFailed: (field: keyof ProductPayload, errorMessage: string) =>
      setError(field, { message: errorMessage }),
  })

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-5 my-[40px] tablet:gap-y-[15px] mobile:gap-y-2.5 mobile:m-0 mobile:mt-5"
    >
      <div className="flex items-center gap-x-5 tablet:gap-x-[15px] mobile:flex-col-reverse mobile:items-start mobile:gap-y-2.5">
        <div className="flex flex-col gap-y-5 tablet:gap-y-[15px] mobile:w-full mobile:gap-y-2.5">
          <TextFieldInput
            placeholder="상품명 (상품 등록 여부를 확인해 주세요)"
            className="h-[70px] tablet:h-[60px] mobile:w-full"
            setValue={setValue}
            {...register('name', nameValidation)}
            errors={errors}
          />
          <CategoryDropdown
            error={errors.categoryId?.message}
            control={control}
          />
        </div>
        <ProductImageUpload error={errors.image?.message} control={control} />
      </div>
      <TextareaInput
        {...register('description', descriptionValidation)}
        value={description}
        placeholder="상품 설명을 입력해주세요"
        errors={errors}
      />
      <div>
        <p className="text-sm text-black-20 pb-2.5 mobile:text-xs">
          모든 입력란은 필수 항목입니다.
        </p>
        <Button
          variant="primary"
          disabled={!isValid || isPending}
          isLoading={isPending}
        >
          추가하기
        </Button>
      </div>
    </Form>
  )
}
