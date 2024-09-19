import { Control, useController } from 'react-hook-form'
import { ImageInput } from '@shared/ui'
import { createImageUpload, imageValidation } from '@shared/utils'
import type { UserPayload } from '@shared/types'

interface ProfileImageUploadProps {
  error: string | undefined
  control: Control<UserPayload>
}

export default function ProfileImageUpload({
  error,
  control,
}: ProfileImageUploadProps) {
  const {
    field: { onChange },
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
    />
  )
}
