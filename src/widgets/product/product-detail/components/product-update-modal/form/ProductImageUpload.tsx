import { UseFormSetValue } from 'react-hook-form'
import { ImageInput } from '@shared/ui'
import type { ProductPayload } from '@shared/types'
import { createImageUpload } from '@shared/utils'

interface ProductImageUploadProps {
  setValue: UseFormSetValue<ProductPayload>
}

export default function ProductImageUpload({
  setValue,
}: ProductImageUploadProps) {
  const onUploadSuccess = async (file: File) => {
    try {
      const { url } = await createImageUpload(file)
      setValue('image', url)
    } catch (error) {}
  }

  const onCancel = () => setValue('image', '')

  return (
    <ImageInput
      onCancel={onCancel}
      onSuccess={onUploadSuccess}
      className="tablet:w-[135px] tablet:h-[135px] mobile:w-[140px] mobile:h-[140px]"
    />
  )
}
