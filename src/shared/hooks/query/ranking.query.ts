import { useQuery } from '@tanstack/react-query'
import { fetchUserRanking } from '@shared/api'
import { RankingItem } from '@widgets/product/product-home/components'

export function useRankingData() {
  const { data: rankingData, error } = useQuery({
    queryKey: ['fetchUserRanking'],
    queryFn: fetchUserRanking,
  })

  if (error) {
    console.error(error)
    return { isLoading: false, error }
  }
  return { rankingData, error: null }
}
