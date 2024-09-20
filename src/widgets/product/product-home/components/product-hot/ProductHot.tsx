import { useFetchProductsHot } from '@shared/hooks'
import { ProductCardList } from '@shared/ui'
import { ProductCardSection } from '@widgets/product/product-home/layout'

function HotTitle() {
  return (
    <div>
      지금 핫한 상품
      <span className="font-bold text-gradient ">TOP 6</span>
    </div>
  )
}

export default function ProductHot() {
  const { data, isLoading } = useFetchProductsHot()

  if (isLoading) return null

  return (
    <ProductCardSection renderTitle={<HotTitle />}>
      <ProductCardList data={data!} />
    </ProductCardSection>
  )
}
