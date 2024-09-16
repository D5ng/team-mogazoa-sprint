import { useMemo } from 'react'
import {
  RankingItem,
  Variant,
} from '../../widgets/product/components/ranking/Ranking.types'

const variantLUT: Record<number, Variant> = {
  0: 'first',
  1: 'second',
}

export default function useChipVariant(data: RankingItem[] | undefined) {
  const updatedData = useMemo(() => {
    const result: RankingItem[] = []
    data?.forEach((item, index) => {
      const variant = variantLUT[index] || 'etc'
      const rank = index + 1
      result.push({ ...item, variant, rank })
    })

    return result
  }, [data])

  return updatedData
}
