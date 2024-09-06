import ProductCardUi from './ProductCardUi'
import { CARD_MOCK_DATA } from './ProductCard.mock'
import { ProductCardItems } from './ProductCard.types'

export default function ProductCard() {
  return (
    <div>
      {CARD_MOCK_DATA.map((data: ProductCardItems) => (
        <ProductCardUi key={data.id} data={data} />
      ))}
    </div>
  )
}
