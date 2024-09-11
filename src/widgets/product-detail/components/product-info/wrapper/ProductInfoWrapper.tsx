import type { ProductDetailResponse } from '@shared/types'
import {
  ProductImage,
  ProductContents,
} from '@widgets/product-detail/components'

export default function ProductInfoWrapper({
  name,
  description,
}: ProductDetailResponse) {
  return (
    <div className="flex justify-center gap-x-[40px] target:gap-x-5 mobile:flex-col">
      <ProductImage />
      <ProductContents name={name} description={description} />
    </div>
  )
}
