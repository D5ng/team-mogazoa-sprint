import Profile from '@/src/pages/profile/Profile'
import { ProfileCard } from '@/src/widgets/profile'

export default function index() {
  return (
    <Profile isFollowing={false} followeesCount={100} followersCount={100} />
  )
}
