import { useQuery } from '@tanstack/react-query'
import { fetchUserRanking } from '@shared/api'

export function useRankingData() {
  return useQuery({
    queryKey: ['fetchUserRanking'],
    queryFn: fetchUserRanking,
  })
}
