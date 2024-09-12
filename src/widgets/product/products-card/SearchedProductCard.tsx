import useProduct from '@/src/shared/hooks/useProduct'
import ProductCardItem from './ProductCardItem'
import { ProductCardItems } from './ProductCard.types'

export default function SearchedProductCard() {
  const { filteredProducts, searchTitle } = useProduct()

  console.log(filteredProducts)
  return (
    <section>
      <h1 className="ml-[10px] mb-[10px] text-[24px] tablet:text-[20px] mobile:text-[16px] text-white">
        {searchTitle}
      </h1>
      <ul className=" grid grid-cols-3 tablet:grid-cols-2 shrink-0">
        {filteredProducts?.map((data: ProductCardItems) => (
          <li className="inline-block" key={data.id}>
            <ProductCardItem data={data} />
          </li>
        ))}
      </ul>
    </section>
  )
}
