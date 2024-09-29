import { EmptyProduct, Follow } from '@widgets/profile/components'
import { useFetchFollowees } from '@shared/hooks/query'
import { useIntersect } from '@shared/hooks'
import type { UserId } from '@shared/types'

interface FolloweesListProp {
  userId: UserId
  onCloseToggle: () => void
}

export default function FolloweesList({
  userId,
  onCloseToggle,
}: FolloweesListProp) {
  const {
    data: followees,
    isFetching,
    hasNextPage,
    fetchNextPage,
    error,
  } = useFetchFollowees({ userId })

  if (error && !isFetching) throw error

  const onIntersect = () => {
    if (hasNextPage && !isFetching) fetchNextPage()
  }

  const ref = useIntersect<HTMLDivElement>(onIntersect)

  if (followees.length === 0) return <EmptyProduct />

  return (
    <>
      <ul className="flex flex-col gap-6 mt-10 tablet:gap-5 mobile:mt-5">
        {followees.map((followee) => (
          <Follow
            key={followee.id}
            {...followee.followee}
            onCloseToggle={onCloseToggle}
          />
        ))}
      </ul>
      <div className="w-[1px] h-2.5" ref={ref}></div>
    </>
  )
}
