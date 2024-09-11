import axios from 'axios'
import { fetchUserRanking } from '../api'
import { useEffect, useState } from 'react'

export default function useUsersRankingData() {
  const [rankingData, setRankingData] = useState<any>([])
  useEffect(() => {
    const fetchRankingData = async () => {
      try {
        const response = await fetchUserRanking()
        setRankingData(response)
      } catch (error) {
        if (!axios.isAxiosError(error)) {
          console.error(error)
          throw new Error('유저 랭킹 갱신에 실패하였습니다')
        }
      }
    }

    fetchRankingData()
  }, [])

  return { rankingData }
}
