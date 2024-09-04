import type { CompareWithProductMessage } from '../ProductComparisonMessage.type'

export default function StarRatingMessage({
  count,
  isHigher,
  isSame,
}: CompareWithProductMessage) {
  if (isSame) return `같은 카테고리의 제품들과<br /> 별점이 같아요!`

  return (
    <>
      같은 카테고리의 제품들보다
      <br />
      <strong className="text-white">{count}</strong>&nbsp;개&nbsp;
      {isHigher ? '더 높아요!' : '더 낮아요!'}
    </>
  )
}
