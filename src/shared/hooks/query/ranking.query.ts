import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { fetchUserRanking } from '@shared/api'

export function useRankingData() {
  return useSuspenseQuery({
    queryKey: ['fetchUserRanking'],
    queryFn: fetchUserRanking,
  })
}
