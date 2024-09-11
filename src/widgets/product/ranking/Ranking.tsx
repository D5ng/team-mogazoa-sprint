import RankingUi from './RankingUi'
import useChipVariant from '@/src/shared/hooks/useChipVariant'

import useUsersRankingData from '@/src/shared/hooks/useUsersRankingData'

export default function Ranking() {
  const { rankingData } = useUsersRankingData()
  console.log(rankingData)
  const data = useChipVariant(rankingData)

  return (
    <div className="flex mobile:pt-[10px] flex-col tablet:gap-[20px] gap-[30px] shrink-0">
      <h1 className="text-white text-[16px] tablet:text-[14px]">리뷰어 랭킹</h1>
      <ul className=" flex-col flex tablet:flex-row gap-[30px] tablet:gap-[20px] mobile:gap-[15px]">
        {data.map((data) => (
          <li className="flex shrink-0">
            <RankingUi key={data.id} data={data} />
          </li>
        ))}
      </ul>
    </div>
  )
}
