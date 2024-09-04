import type { CompareWithProductMessage } from '../ProductComparisonMessage.type'

export default function CountMessage({
  count,
  isHigher,
  isSame,
}: CompareWithProductMessage) {
  if (isSame) return '같은 카테고리의 제품들과 동일해요!'

  return (
    <>
      같은 카테고리의 제품들보다&nbsp;
      <br className="mobile:hidden" />
      &nbsp;
      <strong className="text-white">{count}</strong>&nbsp;개&nbsp;
      {isHigher ? '더 많아요!' : '더 적아요!'}
    </>
  )
}
