import ProductCardItem from './ProductCardItem'
import { ProductCardItems, ProductCardSectionProps } from './ProductCard.types'
import useSearchProduct from '@shared/hooks/useSearchProduct'
import { useProductStore } from '@shared/store/productStore'
import useProductTitle from '@shared/hooks/useProductsTitle'

export default function ProductCardSection({
  data,
  children,
}: ProductCardSectionProps) {
  const { selectedCategoryKey } = useSearchProduct()
  const { inputValue } = useProductStore()
  const { searchTitle } = useProductTitle()
  return (
    <section>
      <p className="ml-[10px] mb-[10px] text-[24px] tablet:text-[20px] mobile:text-[16px] text-white">
        {inputValue || selectedCategoryKey ? searchTitle : children}
      </p>
      <ul className=" grid grid-cols-3 tablet:grid-cols-2 shrink-0 mobile:gap-x-[7vw]">
        {data?.map((data: ProductCardItems) => (
          <li className="inline-block" key={data.id}>
            <ProductCardItem data={data} />
          </li>
        ))}
      </ul>
    </section>
  )
}
