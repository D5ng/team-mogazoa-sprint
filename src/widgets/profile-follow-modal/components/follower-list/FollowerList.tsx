import { Follow } from '@widgets/profile-follow-modal/components'
import { useFetchFollowers } from '@shared/hooks/query/user.query'
import { useAuthStore } from '@shared/store'
import { useIntersect } from '@shared/hooks'

export default function FollowerList() {
  const user = useAuthStore((state) => state.user)
  const userId = user?.id

  const {
    data: followers,
    isFetching,
    hasNextPage,
    fetchNextPage,
    error,
  } = useFetchFollowers({ userId })

  if (error && !isFetching) throw error

  const onIntersect = () => {
    if (hasNextPage && !isFetching) fetchNextPage()
  }

  const ref = useIntersect<HTMLDivElement>(onIntersect)

  return (
    <>
      <ul className="flex flex-col gap-6 mt-10 tablet:gap-5 mobile:mt-5">
        {followers.map((follower) => (
          <Follow
            key={follower.id}
            nickname={follower.nickname}
            image={follower.image}
          />
        ))}
      </ul>
      <div className="w-[1px] h-2.5" ref={ref}></div>
    </>
  )
}
