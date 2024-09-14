import { UseFormSetValue } from 'react-hook-form'
import { ImageInput } from '@shared/ui'
import { createImageUpload } from '@shared/utils'
import type { CreateReview } from '@shared/types'

interface ProductReviewImageUploadProps extends Pick<CreateReview, 'images'> {
  setValue: UseFormSetValue<CreateReview>
  imageIndex: number
}

export default function ProductReviewImageUpload({
  setValue,
  images,
  imageIndex,
}: ProductReviewImageUploadProps) {
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
    <ImageInput
      imageIndex={imageIndex}
      onCancel={onCancel}
      onSuccess={onUploadSuccess}
      className="tablet:w-[135px] tablet:h-[135px] mobile:w-[140px] mobile:h-[140px] flex-shrink-0"
    />
  )
}
