import { useForm } from 'react-hook-form'
import { Button, Form, TextareaInput, TextFieldInput } from '@shared/ui'
import { descriptionValidation, nameValidation } from '@shared/utils'
import {
  CategoryDropdown,
  ProductImageUpload,
} from '@widgets/product/product-home/components/product-add-modal'
import type { ProductPayload } from '@shared/types'
import { useFetchProductDetail } from '@shared/hooks'
import { useUpdateProductForm } from '@widgets/product/product-detail/hooks'

interface ProductAddFormProps {
  onCloseToggle: () => void
  productId: number
}

export default function ProductUpdateForm({
  onCloseToggle,
  productId,
}: ProductAddFormProps) {
  const detailQuery = useFetchProductDetail(productId)
  const detailData = detailQuery.data!

  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    setError,
  } = useForm<ProductPayload>({
    defaultValues: {
      name: detailData.name,
      description: detailData.description,
      categoryId: detailData.categoryId,
      image: detailData.image,
    },
    mode: 'all',
  })

  const description = watch('description')

  const { onSubmit, isPending } = useUpdateProductForm({
    productId: productId,
    onSuccess: () => onCloseToggle(),
    onFailed: (field: keyof ProductPayload, errorMessage: string) =>
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
        <p className="text-sm text-black-20 pb-2.5">
          모든 입력란은 필수 항목입니다.
        </p>
        <Button variant="primary" disabled={!isValid} isLoading={isPending}>
          수정하기
        </Button>
      </div>
    </Form>
  )
}
