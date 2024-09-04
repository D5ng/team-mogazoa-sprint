import { useMemo } from 'react'
import { RankingItem, Variant } from '../../widgets/ranking/Ranking.types'

export default function useChipVariant(
  data: Omit<RankingItem, 'variant' | 'rank'>[],
): RankingItem[] {
  const updatedData = useMemo(() => {
    return data.map((item, index) => {
      let variant: Variant
      let rank: number

      if (index === 0) {
        variant = 'first'
        rank = 1
      } else if (index === 1) {
        variant = 'second'
        rank = 2
      } else {
        variant = 'etc'
        rank = index + 1
      }

      return { ...item, variant, rank }
    })
  }, [data])

  return updatedData
}
