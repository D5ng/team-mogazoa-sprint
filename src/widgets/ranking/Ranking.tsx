import ProfileImage from '@/src/shared/ui/profileImage/ProfileImage'
import RankingUi from './RankingUi'

export default function Ranking() {
  const data = {
    profileImg: '',
    nickName: '',
    variant: '',
    folower: 0,
    review: 0,
  }

  return (
    <>
      <RankingUi data={data} />
    </>
  )
}
