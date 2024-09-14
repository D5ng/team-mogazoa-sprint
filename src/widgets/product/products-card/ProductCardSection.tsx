import useProduct from '@shared/hooks/useProduct'
import ProductCardItem from './ProductCardItem'
import { ProductCardItems, ProductCardSectionProps } from './ProductCard.types'

export default function ProductCardSection({
  data,
  children,
}: ProductCardSectionProps) {
  const { searchTitle, inputValue, selectedKey } = useProduct()
  return (
    <section>
      <title className="ml-[10px] mb-[10px] text-[24px] tablet:text-[20px] mobile:text-[16px] text-white">
        {inputValue || selectedKey ? searchTitle : children}
      </title>
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
