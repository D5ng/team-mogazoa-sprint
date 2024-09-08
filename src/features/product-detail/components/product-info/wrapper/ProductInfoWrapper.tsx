import {
  ProductImage,
  ProductContents,
} from '@features/product-detail/components'

export default function ProductInfoWrapper() {
  return (
    <div className="flex justify-center gap-x-[40px] target:gap-x-5 mobile:flex-col">
      <ProductImage />
      <ProductContents />
    </div>
  )
}
