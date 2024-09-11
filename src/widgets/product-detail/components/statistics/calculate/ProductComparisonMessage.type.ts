export interface ProductComparisonMessageProps {
  title: string
  score: number
  scoreMetric: number
}

export interface CompareWithProductMessage {
  count: number
  isHigher: boolean
  isSame: boolean
}
