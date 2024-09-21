import ProductCardItem from './ProductCardItem'
import { ForwardedRef, forwardRef } from 'react'
import type { ProductListItem, UserItem } from '@shared/types'

interface ListProps {
  data: ProductListItem[]
}

const ProductCardList = forwardRef(
  ({ data }: ListProps, ref?: ForwardedRef<any>) => {
    return (
      <>
        <ul className="grid grid-cols-3 tablet:grid-cols-2 shrink-0 gap-[20px]  ">
          {data?.map((data: ProductListItem) => (
            <ProductCardItem {...data} key={data.id} />
          ))}
        </ul>
        {ref && <div className="w-[1px] h-2.5" ref={ref}></div>}
      </>
    )
  },
)

export default ProductCardList
