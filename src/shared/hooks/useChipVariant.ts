import { useMemo } from 'react'
import { RankingItem, Variant } from '../../widgets/ranking/Ranking.types'

const variantLUT: Variant[] = ['first', 'second', 'etc']
const rankLUT: number[] = [1, 2]

export default function useChipVariant(
  data: Omit<RankingItem, 'variant' | 'rank'>[],
): RankingItem[] {
  const updatedData = useMemo(() => {
    return data.map((item, index) => {
      const variant = index < 2 ? variantLUT[index] : 'etc'
      const rank = index < 2 ? rankLUT[index] : index + 1

      return { ...item, variant, rank }
    })
  }, [data])

  return updatedData
}
