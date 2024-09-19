import { ProductListItem } from '@shared/types'

export type ProductCardItems = Omit<
  ProductListItem,
  'updatedAt' | 'createdAt' | 'writerId' | 'categoryId'
>

export type ProductCardProps = {
  data: ProductCardItems
  children?: React.ReactNode
}

export type ProductCardData = ProductCardItems[]

export interface ProductCardSectionProps {
  data: ProductCardItems[] | undefined
  children?: React.ReactNode
}
