import {
  ProductImage,
  ProductContents,
} from '@features/product-detail/components'
import { ProductDetailResponse } from '@features/product-detail/types'

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
