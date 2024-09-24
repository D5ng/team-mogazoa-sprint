import ProfileImage from '@shared/ui/profile-image/ProfileImage'
import { RankingUiProps } from './Ranking.types'
import RankingChip from './RankingChip'
import Link from 'next/link'

export default function RankingItem({ data }: Partial<RankingUiProps>) {
  if (!data) return
  return (
    <li className="flex shrink-0">
      <div className="flex cursor-pointer shrink-0 hover:scale-105 transition-transform duration-200 ease-in-out">
        <Link className="flex shrink-0" href={`/profile/${data.id}`}>
          <ProfileImage
            className="tablet:w-[38px] tablet:h-[38px]"
            size={42}
            url={data.image}
          />
          <div className="flex-col items-center justify-between ml-[10px] tablet:ml-[8px]">
            <div className="flex gap-[5px]">
              <RankingChip variant={data.variant} rank={data.rank} />
              <p className="text-[16px] tablet:text-[14px] text-white">
                {data.nickname}
              </p>
            </div>
            <div className="flex text-[12px] tablet:text-[10px] tablet:gap-[6px] gap-[8px] text-black-30 mt-[4px]">
              <p>팔로워 {data.followersCount}</p>
              <p>리뷰 {data.reviewCount}</p>
            </div>
          </div>
        </Link>
      </div>
    </li>
  )
}
