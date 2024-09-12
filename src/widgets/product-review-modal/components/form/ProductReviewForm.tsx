import { useForm } from 'react-hook-form'
import { Button, Form, ImageInput, TextareaInput } from '@shared/ui'
import type { CreateReview } from '@shared/types'
import { createImageUpload } from '@shared/utils'
import { Rating } from '@widgets/product-review-modal/components'
import { useCreateReviewForm } from '@widgets/product-review-modal/hooks'
import { defaultValues } from './defaultValues'
import ProductReviewImageUpload from './ProductReviewImageUpload'

export default function ProductReviewForm() {
  const { register, handleSubmit, setValue, watch, control } =
    useForm<CreateReview>({
      defaultValues,
      mode: 'onBlur',
    })

  const content = watch('content')
  const images = watch('images')
  const onSubmit = useCreateReviewForm({})

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
          <ProductReviewImageUpload
            key={order}
            imageIndex={order}
            setValue={setValue}
            images={images}
          />
        ))}
      </div>
      <Button variant="primary" className="mt-10 mobile:mt-0">
        추가하기
      </Button>
    </Form>
  )
}
