import { EmptyProduct, Follow } from '@widgets/profile/components'
import { useFetchFollowers } from '@shared/hooks/query'
import { useIntersect } from '@shared/hooks'
import type { UserId } from '@shared/types'

interface FollowerListProp {
  userId: UserId
  onCloseToggle: () => void
}

export default function FollowerList({
  userId,
  onCloseToggle,
}: FollowerListProp) {
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

  if (followers.length === 0) return <EmptyProduct />

  return (
    <div className="w-full h-full overflow-y-auto custom-scrollbar">
      <ul className="flex flex-col gap-6 mt-10 tablet:gap-5 mobile:mt-5">
        {followers.map((follower) => (
          <Follow
            key={follower.id}
            {...follower.follower}
            onCloseToggle={onCloseToggle}
          />
        ))}
      </ul>
      <div className="w-[1px] h-2.5" ref={ref}></div>
    </div>
  )
}
