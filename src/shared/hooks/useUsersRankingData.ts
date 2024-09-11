import { useQuery } from '@tanstack/react-query'
import { fetchUserRanking } from '../api'
import { RankingItem } from '@/src/widgets/product/ranking/Ranking.types'
import { UserRanking } from '../types'

export default function useUsersRankingData() {
  const {
    data: rankingData,
    isLoading,
    error,
  } = useQuery<RankingItem[], Error>({
    queryKey: ['fetchUserRanking'],
    queryFn: fetchUserRanking,
  })

  if (error) {
    console.error(error)
    return { rankingData: [], isLoading: false, error }
  }

  return { rankingData, isLoading: false, error: null }
}
