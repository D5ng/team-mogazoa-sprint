import { ComparisonTableProps } from '@/src/shared/types/compare/compare.types'
import compareProducts from '../utils/compareProducts'

export default function CompareTable({
  product1,
  product2,
}: ComparisonTableProps) {
  const result = compareProducts(product1, product2)

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            기준
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            상품1 값
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            상품2 값
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            비교 결과
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">별점</td>
          <td className="px-6 py-4 whitespace-nowrap">{product1.rating}</td>
          <td className="px-6 py-4 whitespace-nowrap">{product2.rating}</td>
          <td className="px-6 py-4 whitespace-nowrap">{result.rating}</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">리뷰 개수</td>
          <td className="px-6 py-4 whitespace-nowrap">
            {product1.reviewCount}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {product2.reviewCount}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">{result.reviewCount}</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">찜 개수</td>
          <td className="px-6 py-4 whitespace-nowrap">
            {product1.favoriteCount}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {product2.favoriteCount}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {result.favoriteCount}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
