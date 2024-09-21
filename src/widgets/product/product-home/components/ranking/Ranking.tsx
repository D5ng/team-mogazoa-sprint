import RankingItem from './RankingItem'
import { useRankingData } from '@/src/shared/hooks'
import { rankingIndexer } from '@widgets/product/product-home/utils'
export default function Ranking() {
  const { rankingData } = useRankingData()
  const indexedData = rankingIndexer(rankingData)

  return (
    <div className="fixed  top-[100px] right-[170px] tablet:static  flex flex-col   tablet:gap-[20px] gap-[30px] shrink-0 ">
      <h3 className="text-white text-[16px] tablet:text-[14px]">리뷰어 랭킹</h3>
      <ul className=" flex-col flex tablet:flex-row gap-[30px] overflow-x-auto tablet:gap-[20px] mobile:gap-[15px]">
        {indexedData.map((data) => (
          <RankingItem data={data} key={data.id} />
        ))}
      </ul>
    </div>
  )
}
