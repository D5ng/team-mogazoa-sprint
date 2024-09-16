import { ComparisonTableProps } from '@/src/shared/types/compare/compare.types'
import compareProducts from '../utils/compareProducts'

export default function CompareTable({
  product1,
  product2,
}: ComparisonTableProps) {
  const result = compareProducts(product1, product2)
  const resultStyle =
    result.rating.includes(product1.name) ||
    result.reviewCount.includes(product1.name) ||
    result.favoriteCount.includes(product1.name)
      ? 'text-green'
      : 'text-pink'

  return (
    <div className="w-[60vw] border border-black-40 rounded-lg overflow-hidden">
      <table className="w-full table-fixed text-center">
        <thead className=" bg-black-50 text-black-30">
          <tr>
            <th className="px-[45px] py-[20px]">기준</th>
            <th className="px-[45px] py-[20px]">상품1 값</th>
            <th className="px-[45px] py-[20px]">상품2 값</th>
            <th className="px-[45px] py-[20px]">비교 결과</th>
          </tr>
        </thead>

        <tbody className="bg-black-50">
          <tr className="border-t border-black-40">
            <td className="px-[45px] py-[40px] text-black-30">별점</td>
            <td className="px-[45px] py-[40px] text-white">
              {product1.rating}
            </td>
            <td className="px-[45px] py-[40px] text-white">
              {product2.rating}
            </td>
            <td className={`px-[45px] py-[40px] ${resultStyle}`}>
              {result.rating}
            </td>
          </tr>
          <tr className=" border-black-40">
            <td className="px-[45px] py-[40px] text-black-30">리뷰 개수</td>
            <td className="px-[45px] py-[40px] text-white">
              {product1.reviewCount}
            </td>
            <td className="px-[45px] py-[40px] text-white">
              {product2.reviewCount}
            </td>
            <td className={`px-[45px] py-[40px] ${resultStyle}`}>
              {result.reviewCount}
            </td>
          </tr>
          <tr className=" border-black-40">
            <td className="px-[45px] py-[40px] text-black-30">찜 개수</td>
            <td className="px-[45px] py-[40px] text-white">
              {product1.favoriteCount}
            </td>
            <td className="px-[45px] py-[40px] text-white">
              {product2.favoriteCount}
            </td>
            <td className={`px-[45px] py-[40px] ${resultStyle}`}>
              {result.favoriteCount}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
