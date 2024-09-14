import { useCreateReview } from '@shared/hooks'
import type { CreateReview } from '@shared/types'
import { isAxiosError } from 'axios'

interface UseCreateReviewForm {
  onSuccess: () => void
  onFailed?: (field: keyof CreateReview, errorMessage: string) => void
}

export default function useCreateReviewForm({
  onSuccess,
  onFailed,
}: UseCreateReviewForm) {
  const { mutateAsync, isPending } = useCreateReview()

  const onSubmit = async (data: CreateReview) => {
    if (!data.images) return

    try {
      const images = data.images.map((image) => image.url)
      await mutateAsync({
        productId: data.productId,
        content: data.content,
        rating: data.rating,
        images: images,
      })
      onSuccess()
    } catch (error) {
      // if (isAxiosError(error) && error.response) {
      //   const field = Object.keys(
      //     error.response.data.details,
      //   )[0] as keyof ProductType
      //   const errorMessage = error.response.data.details[field].message
      //   return onFailed(field, errorMessage)
      // }

      throw new Error('알 수 없는 에러가 발생했어요.')
    }
  }

  return {
    onSubmit,
    isPending,
  }
}