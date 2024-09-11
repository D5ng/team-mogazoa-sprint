import { createImageUpload } from '@shared/utils'
import { createProduct } from '@shared/api'
import type { ProductType } from '@shared/types'
import { isAxiosError } from 'axios'

interface UseProductForm {
  onSuccess: () => void
  onFailed: (field: keyof ProductType, errorMessage: string) => void
}

export default function useProductForm({
  onSuccess,
  onFailed,
}: UseProductForm) {
  const onSubmit = async (data: ProductType) => {
    if (!data.image) return

    try {
      const { url } = await createImageUpload(data.image)
      await createProduct({
        categoryId: data.categoryId,
        description: data.description,
        name: data.name,
        image: url,
      })
      onSuccess()
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        const field = Object.keys(
          error.response.data.details,
        )[0] as keyof ProductType
        const errorMessage = error.response.data.details[field].message
        return onFailed(field, errorMessage)
      }

      throw new Error('알 수 없는 에러가 발생했어요.')
    }
  }

  return onSubmit
}
