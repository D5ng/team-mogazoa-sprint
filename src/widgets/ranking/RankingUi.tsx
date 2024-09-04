import ProfileImage from '@/src/shared/ui/profileImage/ProfileImage'
import { RankingUiProps } from './Ranking.types'
import RankingChip from './RankingChip'

export default function RankingUi({ data }: RankingUiProps) {
  return (
    <div className="flex shrink-0">
      <ProfileImage
        className="tablet:w-[38px] tablet:h-[38px]"
        size={42}
        url={data.profileImg}
      />
      <div className="flex-col items-center justify-between ml-[10px] tablet:ml-[8px]">
        <div className="flex gap-[5px]">
          <RankingChip variant={data.variant} rank={data.rank} />
          <p className="text-[16px] tablet:text-[14px] text-white">
            {data.nickName}
          </p>
        </div>
        <div className="flex text-[12px] tablet:text-[10px] tablet:gap-[6px] gap-[8px] text-black-30 mt-[4px]">
          <p>팔로워 {data.folower}</p>
          <p>리뷰 {data.review}</p>
        </div>
      </div>
    </div>
  )
}
