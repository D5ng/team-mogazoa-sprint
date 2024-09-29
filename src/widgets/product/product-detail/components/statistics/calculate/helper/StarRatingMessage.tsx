import kIndexer from '@/src/shared/utils/kIndexet'
import type { CompareWithProductMessage } from '../ProductComparisonMessage.type'

export default function StarRatingMessage({
  count,
  isHigher,
  isSame,
}: CompareWithProductMessage) {
  if (isSame) return `같은 카테고리의 제품들과 별점이 같아요!`

  return (
    <>
      같은 카테고리의 제품들보다&nbsp;
      <br className="mobile:hidden" />
      &nbsp;
      <strong className="text-white">{kIndexer(count)}</strong>&nbsp;개&nbsp;
      {isHigher ? '더 높아요!' : '더 낮아요!'}
    </>
  )
}
