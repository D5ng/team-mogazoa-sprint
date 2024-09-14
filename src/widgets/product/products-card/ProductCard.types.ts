import { ProductListItem } from '@/src/shared/types'

export // ProductListItem에서 필요한 속성만 포함하여 ProductCardItems 타입을 정의
type ProductCardItems = Omit<
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
