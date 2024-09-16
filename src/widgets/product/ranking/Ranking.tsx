import RankingUi from './RankingUi'
import useRankingData from '@/src/shared/hooks/useRankingData'
import rankingIndexer from '@/src/shared/utils/rankingIndexer'

export default function Ranking() {
  const { rankingData } = useRankingData()
  const indexedData = rankingIndexer(rankingData)

  return (
    <div className="flex mobile:pt-[10px] flex-col tablet:gap-[20px] gap-[30px] shrink-0 ">
      <h1 className="text-white text-[16px] tablet:text-[14px]">리뷰어 랭킹</h1>
      <ul className=" flex-col flex tablet:flex-row gap-[30px] tablet:gap-[20px] mobile:gap-[15px]">
        {indexedData.map((data) => (
          <li className="flex shrink-0" key={data.id}>
            <RankingUi data={data} />
          </li>
        ))}
      </ul>
    </div>
  )
}
