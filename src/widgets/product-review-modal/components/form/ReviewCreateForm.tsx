import { useForm } from 'react-hook-form'
import { Button, Form, TextareaInput } from '@shared/ui'
import type { CreateReview } from '@shared/types'
import {
  Rating,
  ReviewImageUpload,
} from '@widgets/product-review-modal/components'
import { useCreateReviewForm } from '@widgets/product-review-modal/hooks'

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
    formState: { isValid },
  } = useForm<CreateReview>({
    defaultValues: {
      productId: productId,
      images: [],
      content: '',
      rating: 1,
    },
    mode: 'onBlur',
  })

  const content = watch('content')
  const images = watch('images')
  const { onSubmit, isPending } = useCreateReviewForm({
    onSuccess: () => onCloseToggle(),
  })

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <Rating control={control} />
      <TextareaInput
        value={content}
        placeholder="리뷰를 작성해 주세요"
        {...register('content')}
      />
      <div className="flex gap-x-2.5 overflow-x-scroll">
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
