import { useReviewOptionStore } from '@shared/store'
import { useCreateReview } from '@shared/hooks'
import type { CreateReview } from '@shared/types'
import { isAxiosError } from 'axios'
import { toast } from 'react-toastify'

interface UseCreateReviewForm {
  productId: number
  onSuccess: () => void
  onFailed?: (field: keyof CreateReview, errorMessage: string) => void
}

export default function useCreateReviewForm({
  productId,
  onSuccess,
  onFailed,
}: UseCreateReviewForm) {
  const option = useReviewOptionStore((state) => state.option)
  const { mutateAsync, isPending } = useCreateReview({
    productId,
    order: option,
  })

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
      toast.success('리뷰가 작성되었습니다.')
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
