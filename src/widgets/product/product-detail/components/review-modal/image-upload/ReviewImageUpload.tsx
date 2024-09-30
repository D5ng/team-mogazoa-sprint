import { UseFormSetValue } from 'react-hook-form'
import { ImageInput } from '@shared/ui'
import { createImageUpload } from '@shared/utils'
import type { CreateReview } from '@shared/types'

interface ReviewImageUploadProps extends Pick<CreateReview, 'images'> {
  setValue: UseFormSetValue<any>
  imageIndex: number
  previewImage?: string
}

export default function ReviewImageUpload({
  setValue,
  images,
  imageIndex,
  previewImage,
}: ReviewImageUploadProps) {
  const onUploadSuccess = async (file: File, index: number) => {
    try {
      const { url } = await createImageUpload(file)

      const isImage = images.some((image) => image.index === index)
      if (isImage) {
        const filteredImage = images.filter((image) => image.index !== index)
        filteredImage.push({ url, index })
        setValue('images', filteredImage)
        return
      }

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
      previewImage={previewImage || ''}
      isUpdated={true}
    />
  )
}
