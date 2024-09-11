import { isAxiosError } from 'axios'
import { createProduct } from '@shared/api'
import type { ProductPayload } from '@shared/types'

interface UseProductForm {
  onSuccess: () => void
  onFailed: (field: keyof ProductPayload, errorMessage: string) => void
}

export default function useProductForm({
  onSuccess,
  onFailed,
}: UseProductForm) {
  const onSubmit = async (data: ProductPayload) => {
    console.log(data)
    if (!data.image) return

    try {
      await createProduct({
        categoryId: data.categoryId,
        description: data.description,
        name: data.name,
        image: data.image,
      })
      onSuccess()
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        const field = Object.keys(
          error.response.data.details,
        )[0] as keyof ProductPayload
        const errorMessage = error.response.data.details[field].message
        return onFailed(field, errorMessage)
      }

      throw new Error('알 수 없는 에러가 발생했어요.')
    }
  }

  return onSubmit
}
