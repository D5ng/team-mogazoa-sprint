import ProductCardUi from './ProductCardUi'
import { CARD_MOCK_DATA } from './ProductCard.mock'

export default function ProductCard() {
  const data = CARD_MOCK_DATA
  return (
    <div>
      {data.map((data) => (
        <ProductCardUi key={data.id} data={data} />
      ))}
    </div>
  )
}
