import { useForm } from 'react-hook-form'
import { Button, Form, TextareaInput } from '@shared/ui'
import type { UpdateReview, ProductReviewItem } from '@shared/types'
import {
  Rating,
  ReviewImageUpload,
} from '@widgets/product-review-modal/components'
import { useUpdateReviewForm } from '@widgets/product-review-modal/hooks'
import { generateArray } from '@widgets/product-review-modal/utils'

export interface ReviewUpdateFormProps extends ProductReviewItem {
  onCloseToggle: () => void
  productId: number
}

export default function ReviewUpdateForm({
  onCloseToggle,
  ...props
}: ReviewUpdateFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { isValid },
  } = useForm<UpdateReview>({
    defaultValues: {
      reviewId: props.id,
      rating: props.rating,
      content: props.content,
      images: props.reviewImages.map((image, index) => ({
        index: image.id,
        url: image.source,
      })),
    },
    mode: 'onBlur',
  })

  const content = watch('content')
  const images = watch('images')
  const { onSubmit, isPending } = useUpdateReviewForm({
    existingImage: props.reviewImages,
    onSuccess: () => onCloseToggle(),
  })

  const imageDiffLength = 3 - props.reviewImages.length

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <Rating control={control} />
      <TextareaInput
        value={content}
        placeholder="리뷰를 작성해 주세요"
        {...register('content')}
      />

      <div className="flex gap-x-2.5 overflow-x-scroll">
        {props.reviewImages.map((reviewImage) => (
          <ReviewImageUpload
            key={reviewImage.id}
            imageIndex={reviewImage.id}
            setValue={setValue}
            images={images}
            previewImage={reviewImage.source}
          />
        ))}

        {generateArray(imageDiffLength).map((order) => (
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