import useProductAutocomplete from '../hooks/useProductAutocomplete'
import CompareTable from './CompareTable'

export default function CompareSheet() {
  const { data: data1 } = useProductAutocomplete('input1')
  const { data: data2 } = useProductAutocomplete('input2')
  if (!data1) return
  if (!data2) return
  const product1 = {
    rating: data1.list[0].rating,
    reviewCount: data1.list[0].reviewCount,
    favoriteCount: data1.list[0].favoriteCount,
  }
  const product2 = {
    rating: data2.list[0].rating,
    reviewCount: data2.list[0].reviewCount,
    favoriteCount: data2.list[0].favoriteCount,
  }
  return (
    <div>
      <CompareTable product1={product1} product2={product2} />
    </div>
  )
}
