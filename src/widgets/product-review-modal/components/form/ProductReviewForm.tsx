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

  const onUploadSuccess = async (file: File, index: number) => {
    try {
      const { url } = await createImageUpload(file)
      images.push({ url, index })
      setValue('images', images)
    } catch (error) {}
  }

  const onCancel = (index: number) => {
    const filteredImage = images.filter((image) => image.index !== index)
    setValue('images', filteredImage)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <Rating control={control} />
      <TextareaInput
        value={content}
        placeholder="리뷰를 작성해 주세요"
        {...register('content')}
      />
      <div className="flex gap-x-2.5">
        {[1, 2, 3].map((order) => (
          <ProductReviewImageUpload
            key={order}
            imageIndex={order}
            setValue={setValue}
            images={images}
          />
        ))}

        {/* <ImageInput
          {...register('images')}
          setValue={setValue}
          className="tablet:w-[135px] tablet:h-[135px] mobile:w-[140px] mobile:h-[140px]"
        />
        <ImageInput
          {...register('images')}
          setValue={setValue}
          className="tablet:w-[135px] tablet:h-[135px] mobile:w-[140px] mobile:h-[140px]"
        />
        <ImageInput
          {...register('images')}
          setValue={setValue}
          className="tablet:w-[135px] tablet:h-[135px] mobile:w-[140px] mobile:h-[140px]"
        /> */}
      </div>

      <Button variant="primary" className="mt-10">
        추가하기
      </Button>
    </Form>
  )
}
