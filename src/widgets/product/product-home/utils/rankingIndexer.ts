import { RankingItems, Variant } from '@widgets/product/product-home/components'

const variantLUT: Record<number, Variant> = {
  0: 'first',
  1: 'second',
}

export function rankingIndexer(
  data: RankingItems[] | undefined,
): RankingItems[] {
  return (
    data?.map((item, index) => ({
      ...item,
      variant: variantLUT[index] || 'etc',
      rank: index + 1,
    })) || []
  )
}
