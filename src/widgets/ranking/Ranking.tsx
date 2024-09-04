import RankingUi from './RankingUi'
import { RankingItem } from './Ranking.types'
import useChipVariant from '@/src/shared/hooks/useChipVariant'

export default function Ranking() {
  const mock: Omit<RankingItem, 'variant' | 'rank'>[] = [
    {
      profileImg: `https://pbs.twimg.com/media/EFHWmyXUEAASe0o.jpg`,
      nickName: '리뷰왕',
      folower: 200,
      review: 200,
    },
    {
      profileImg: `https://pbs.twimg.com/media/EFHWmyXUEAASe0o.jpg`,
      nickName: '리뷰왕',
      folower: 200,
      review: 200,
    },
    {
      profileImg: `https://pbs.twimg.com/media/EFHWmyXUEAASe0o.jpg`,
      nickName: '리뷰왕',
      folower: 200,
      review: 200,
    },
    {
      profileImg: `https://pbs.twimg.com/media/EFHWmyXUEAASe0o.jpg`,
      nickName: '리뷰왕',
      folower: 200,
      review: 200,
    },
    {
      profileImg: `https://pbs.twimg.com/media/EFHWmyXUEAASe0o.jpg`,
      nickName: '리뷰왕',
      folower: 200,
      review: 200,
    },
  ]

  const data = useChipVariant(mock)

  return (
    <div className="flex flex-col tablet:gap-[20px] gap-[30px] ">
      <h1 className="text-white text-[16px] tablet:text-[14px]">리뷰어 랭킹</h1>
      <div className=" lg:flex-col flex gap-[30px]">
        {data.map((data, index) => (
          <RankingUi key={index} data={data} />
        ))}
      </div>
    </div>
  )
}
