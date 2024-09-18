import { isAxiosError } from 'axios'
import type { UserPayload } from '@shared/types'
import { useUpdateProfile } from '@/src/shared/hooks/mutate/user.mutate'
import { toast } from 'react-toastify'

interface useProfileEditForm {
  onSuccess: () => void
  onFailed: (field: keyof UserPayload, errorMessage: string) => void
}

export default function useProfileEditForm({
  onSuccess,
  onFailed,
}: useProfileEditForm) {
  const updateProfileMutation = useUpdateProfile()

  const onSubmit = async (data: UserPayload) => {
    try {
      await updateProfileMutation.mutateAsync({
        description: data.description,
        nickname: data.nickname,
        image: data.image,
      })
      toast.success('프로필이 편집되었습니다')
      onSuccess()
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        const field = Object.keys(
          error.response.data.details,
        )[0] as keyof UserPayload
        const errorMessage = error.response.data.details[field].message
        toast.error(errorMessage)

        if (field.includes('image'))
          return onFailed('image', '이미지를 올려주세요.')

        return onFailed(field, errorMessage)
      }

      throw new Error('알 수 없는 에러가 발생했어요.')
    }
  }

  return onSubmit
}
