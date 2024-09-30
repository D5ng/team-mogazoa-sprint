import { CategoryId } from '@/src/shared/ui'
import { ProductPayload } from '@shared/types'

export const defaultValues = (categoryId?: CategoryId): ProductPayload => ({
  name: '',
  description: '',
  categoryId: categoryId || null,
  image: '',
})
