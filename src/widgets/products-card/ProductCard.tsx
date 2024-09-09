import ProductCardUi from './ProductCardItem'
import { CARD_MOCK_DATA } from './ProductCard.mock'
import { ProductCardItems } from './ProductCard.types'

export default function ProductCard() {
  return (
    <ul>
      {CARD_MOCK_DATA.map((data: ProductCardItems) => (
        <li>
          <ProductCardUi key={data.id} data={data} />
        </li>
      ))}
    </ul>
  )
}
