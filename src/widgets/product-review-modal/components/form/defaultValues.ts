import { CreateReview } from '@shared/types'

type defaultValuesFn = (productId: number) => CreateReview

export const defaultValues: defaultValuesFn = (productId: number) => ({
  productId: productId,
  images: [],
  content: '',
  rating: 1,
})
