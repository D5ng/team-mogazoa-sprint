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
    <main className="w-[940px] m-auto mt-[60px] tablet:w-full">
      <section>
        <ProductInfo productId={productId} />
      </section>
      <section className="mt-[80px]">
        <StatisticsList productId={productId} />
      </section>
      <section className="mt-[80px]">
        <ReviewWrapper productId={productId} />
      </section>
    </main>
  )
}
