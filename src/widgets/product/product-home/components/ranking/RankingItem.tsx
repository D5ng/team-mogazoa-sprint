import ProfileImage from '@shared/ui/profile-image/ProfileImage'
import { RankingItems } from './Ranking.types'
import RankingChip from './RankingChip'
import Link from 'next/link'

export default function RankingItem({
  id,
  image,
  variant,
  rank,
  nickname,
  followersCount,
  reviewCount,
}: RankingItems) {
  return (
    <li className="flex shrink-0">
      <div className="flex cursor-pointer shrink-0 hover:scale-105 transition-transform duration-200 ease-in-out">
        <Link className="flex shrink-0" href={`/profile/${id}`}>
          <ProfileImage
            className="tablet:w-[38px] tablet:h-[38px]"
            size={42}
            url={image}
          />
          <div className="flex-col items-center justify-between ml-[10px] tablet:ml-[8px]">
            <div className="flex gap-[5px]">
              <RankingChip variant={variant} rank={rank} />
              <p className="text-[16px] tablet:text-[14px] text-white">
                {nickname}
              </p>
            </div>
            <div className="flex text-[12px] tablet:text-[10px] tablet:gap-[6px] gap-[8px] text-black-30 mt-[4px]">
              <p>팔로워 {followersCount}</p>
              <p>리뷰 {reviewCount}</p>
            </div>
          </div>
        </Link>
      </div>
    </li>
  )
}
