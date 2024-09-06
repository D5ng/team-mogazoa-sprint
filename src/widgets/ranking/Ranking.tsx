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
      id: 1,
    },
    {
      profileImg: `https://pbs.twimg.com/media/EFHWmyXUEAASe0o.jpg`,
      nickName: '리뷰왕',
      folower: 200,
      review: 200,
      id: 2,
    },
    {
      profileImg: `https://pbs.twimg.com/media/EFHWmyXUEAASe0o.jpg`,
      nickName: '리뷰왕',
      folower: 200,
      review: 200,
      id: 3,
    },
    {
      profileImg: `https://pbs.twimg.com/media/EFHWmyXUEAASe0o.jpg`,
      nickName: '리뷰왕',
      folower: 200,
      review: 200,
      id: 4,
    },
    {
      profileImg: `https://pbs.twimg.com/media/EFHWmyXUEAASe0o.jpg`,
      nickName: '리뷰왕',
      folower: 200,
      review: 200,
      id: 5,
    },
  ]

  const data = useChipVariant(mock)

  return (
    <div className="flex flex-col tablet:gap-[20px] gap-[30px] ">
      <h1 className="text-white text-[16px] tablet:text-[14px]">리뷰어 랭킹</h1>
      <div className=" lg:flex-col flex gap-[30px] tablet:gap-[20px] mobile:gap-[15px]">
        {data.map((data) => (
          <RankingUi key={data.id} data={data} />
        ))}
      </div>
    </div>
  )
}