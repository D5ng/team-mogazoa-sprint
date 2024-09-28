import { useForm } from 'react-hook-form'
import { Button, Form, TextareaInput } from '@shared/ui'
import type { CreateReview } from '@shared/types'
import { descriptionValidation } from '@shared/utils'
import {
  Rating,
  ReviewImageUpload,
} from '@widgets/product/product-detail/components'
import { useCreateReviewForm } from '@/src/widgets/product/product-detail/hooks'

interface ReviewCreateFormProps {
  productId: number
  onCloseToggle: () => void
}

export default function ReviewCreateForm({
  productId,
  onCloseToggle,
}: ReviewCreateFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { isValid, errors },
  } = useForm<CreateReview>({
    defaultValues: {
      productId: productId,
      images: [],
      content: '',
      rating: 1,
    },
    mode: 'onTouched',
  })

  const content = watch('content')
  const images = watch('images')
  const { onSubmit, isPending } = useCreateReviewForm({
    productId: productId,
    onSuccess: () => onCloseToggle(),
  })

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <Rating control={control} />
      <TextareaInput
        value={content}
        placeholder="리뷰를 작성해 주세요"
        {...register('content', descriptionValidation)}
        errors={errors}
      />
      <div className="flex gap-x-2.5 overflow-x-scroll none-scrollbar">
        {[1, 2, 3].map((order) => (
          <ReviewImageUpload
            key={order}
            imageIndex={order}
            setValue={setValue}
            images={images}
          />
        ))}
      </div>
      <Button
        variant="primary"
        className="mt-10 mobile:mt-0"
        isLoading={isPending}
        disabled={isPending || !isValid}
      >
        추가하기
      </Button>
    </Form>
  )
}
