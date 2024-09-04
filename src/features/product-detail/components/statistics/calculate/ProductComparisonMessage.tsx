import { CountMessage, StarRatingMessage } from './helper'
import { ProductComparisonMessageProps } from './ProductComparisonMessage.type'

export default function ProductComparisonMessage({
  title,
  score,
  scoreMetric,
}: ProductComparisonMessageProps) {
  const diff = +(score - scoreMetric).toFixed(2)
  const isHigher = diff > 0 ? true : false
  const isSame = score === scoreMetric

  return (
    <p className="text-center text-black-30 text-sm tablet:text-xs mobile:text-start">
      {title === '별점 평균' ? (
        <StarRatingMessage
          count={Math.abs(diff)}
          isHigher={isHigher}
          isSame={isSame}
        />
      ) : (
        <CountMessage
          count={Math.abs(diff)}
          isHigher={isHigher}
          isSame={isSame}
        />
      )}
    </p>
  )
}
