import { useQuery } from '@tanstack/react-query'
import { fetchUserRanking } from '../api'
import { RankingItems } from '@widgets/product/product-home/components/ranking/Ranking.types'

export default function useRankingData() {
  const { data: rankingData, error } = useQuery<RankingItems[], Error>({
    queryKey: ['fetchUserRanking'],
    queryFn: fetchUserRanking,
  })

  if (error) {
    console.error(error)
    return { isLoading: false, error }
  }
  return { rankingData, error: null }
}
