import ProfileImage from '@/src/shared/ui/profileImage/ProfileImage'
import RankingUi from './RankingUi'
import { RankingProps } from './Ranking.types'

export default function Ranking() {
  const data: RankingProps['data'] = {
    profileImg: `https://pbs.twimg.com/media/EFHWmyXUEAASe0o.jpg`,
    nickName: '리뷰왕',
    variant: 'first',
    folower: 200,
    review: 200,
  }

  return (
    <>
      <RankingUi data={data} />
    </>
  )
}
