import { Control, useController } from 'react-hook-form'
import { ImageInput } from '@shared/ui'
import type { ProductPayload } from '@shared/types'
import { createImageUpload, imageValidation } from '@shared/utils'

interface ProductImageUploadProps {
  error: string | undefined
  control: Control<ProductPayload>
}

export default function ProductImageUpload({
  error,
  control,
}: ProductImageUploadProps) {
  const {
    field: { onChange, value },
  } = useController({ name: 'image', control, rules: imageValidation })
  const onUploadSuccess = async (file: File) => {
    const { url } = await createImageUpload(file)
    onChange(url)
  }

  const onCancel = () => onChange('')

  return (
    <ImageInput
      onCancel={onCancel}
      onSuccess={onUploadSuccess}
      className={`tablet:w-[135px] tablet:h-[135px] mobile:w-[140px] mobile:h-[140px] ${error ? 'border-red' : 'border-black-70'}`}
      previewImage={value}
    />
  )
}
