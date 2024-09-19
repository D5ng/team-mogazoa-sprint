import { useReviewOptionStore } from '@shared/store'
import { useUpdateReview } from '@shared/hooks'
import type { UpdateReview } from '@shared/types'
import { isAxiosError } from 'axios'

interface UseCreateReviewForm {
  productId: number
  existingImage: { id: number; source: string }[]
  onSuccess: () => void
  onFailed?: (field: keyof UpdateReview, errorMessage: string) => void
}

export default function useUpdateReviewForm({
  productId,
  existingImage,
  onSuccess,
  onFailed,
}: UseCreateReviewForm) {
  const option = useReviewOptionStore((state) => state.option)
  const { mutateAsync, isPending } = useUpdateReview({
    productId,
    order: option,
  })

  const onSubmit = async (data: UpdateReview) => {
    try {
      const images = data.images.map((image, index) =>
        existingImage[index]?.source === image.url
          ? { id: existingImage[index].id }
          : { source: image.url },
      ) as []

      mutateAsync({
        reviewId: data.reviewId,
        content: data.content,
        rating: data.rating,
        images,
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
      // throw new Error('알 수 없는 에러가 발생했어요.')
    }
  }

  return {
    onSubmit,
    isPending,
  }
}
