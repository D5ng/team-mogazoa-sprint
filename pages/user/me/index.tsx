import Profile from '@/src/pages/profile/Profile'

export default function index() {
  return (
    <Profile isFollowing={false} followeesCount={100} followersCount={100} />
  )
}
