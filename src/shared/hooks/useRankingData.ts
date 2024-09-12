import { useQuery } from '@tanstack/react-query'
import { fetchUserRanking } from '../api'
import { RankingItem } from '@/src/widgets/product/ranking/Ranking.types'

export default function useRankingData() {
  const { data: rankingData, error } = useQuery<RankingItem[], Error>({
    queryKey: ['fetchUserRanking'],
    queryFn: fetchUserRanking,
  })

  if (error) {
    console.error(error)
    return { isLoading: false, error }
  }
  return { rankingData, error: null }
}
