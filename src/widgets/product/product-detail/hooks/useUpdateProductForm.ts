import { isAxiosError } from 'axios'
import { updateProduct } from '@shared/api'
import type { ProductPayload } from '@shared/types'
import { useUpdateProduct } from '@shared/hooks'
import { toast } from 'react-toastify'

interface UseProductForm {
  productId: number
  onSuccess: () => void
  onFailed: (field: keyof ProductPayload, errorMessage: string) => void
}

export default function useUpdateProductForm({
  onSuccess,
  onFailed,
  productId,
}: UseProductForm) {
  const { mutateAsync, isPending } = useUpdateProduct({ productId })

  const onSubmit = async (data: ProductPayload) => {
    if (!data.categoryId)
      return onFailed('categoryId', '카테고리를 입력해주세요.')

    try {
      await mutateAsync({
        productId: productId,
        categoryId: data.categoryId,
        description: data.description,
        name: data.name,
        image: data.image,
      })
      onSuccess()
      toast.success('상품이 수정되었습니다.')
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        const field = Object.keys(
          error.response.data.details,
        )[0] as keyof ProductPayload
        const errorMessage = error.response.data.details[field].message

        if (field.includes('image'))
          return onFailed('image', '이미지를 올려주세요.')

        return onFailed(field, errorMessage)
      }

      throw new Error('알 수 없는 에러가 발생했어요.')
    }
  }

  return { onSubmit, isPending }
}
