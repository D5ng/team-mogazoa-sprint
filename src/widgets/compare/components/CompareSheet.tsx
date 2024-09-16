import useProductAutocomplete from '../hooks/useProductAutocomplete'
import compareProducts from '../utils/compareProducts'
import CompareTable from './CompareTable'

export default function CompareSheet() {
  const { data: data1 } = useProductAutocomplete('상품1')
  const { data: data2 } = useProductAutocomplete('상품2')
  if (!data1 || !data2) return
  const product1 = {
    name: data1.list[0].name,
    rating: data1.list[0].rating,
    reviewCount: data1.list[0].reviewCount,
    favoriteCount: data1.list[0].favoriteCount,
  }
  const product2 = {
    name: data2.list[0].name,
    rating: data2.list[0].rating,
    reviewCount: data2.list[0].reviewCount,
    favoriteCount: data2.list[0].favoriteCount,
  }
  const { finalResult } = compareProducts(product1, product2)
  return (
    <div className="mt-[50px] flex flex-col gap-[50px] items-center">
      {typeof finalResult === 'string' ? (
        <div className="text-[25px] text-white ">{finalResult}</div>
      ) : (
        <div>
          <div className="text-[25px] text-white">
            <span>{finalResult.productName}</span> 상품이 승리하였습니다!
          </div>
          <p className="text-black-30 text-center text-[15px]">
            3가지 항목중 {finalResult.winCount}가지 항목에서 우세합니다.
          </p>
        </div>
      )}
      <CompareTable product1={product1} product2={product2} />
    </div>
  )
}
