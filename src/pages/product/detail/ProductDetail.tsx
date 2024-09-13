import {
  ProductInfo,
  ReviewWrapper,
  StatisticsList,
} from '@widgets/product-detail/components'

interface ProductDetailProps {
  productId: number
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  return (
    <main className="w-[940px] m-auto mt-[60px] tablet:w-full px-[30px] mobile:px-[20px]">
      <ProductInfo productId={productId} />
      <StatisticsList productId={productId} />
      <ReviewWrapper productId={productId} />
    </main>
  )
}
