import { useFetchProductDetail } from '@shared/hooks'
import {
  ProductImage,
  ProductContents,
} from '@widgets/product/product-detail/components'

interface ProductInfoProps {
  productId: number
  createdProductUserId: number
}

export default function ProductInfo({
  productId,
  createdProductUserId,
}: ProductInfoProps) {
  const detailQuery = useFetchProductDetail(productId)
  const data = detailQuery.data!

  return (
    <section className="flex justify-between gap-x-[40px] target:gap-x-5 mobile:flex-col">
      <ProductImage image={data.image} />
      <ProductContents {...data} createdProductUserId={createdProductUserId} />
    </section>
  )
}
