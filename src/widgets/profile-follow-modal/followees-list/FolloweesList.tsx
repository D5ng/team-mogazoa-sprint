import { Follow } from '@/src/widgets/profile-follow-modal'
import { useFetchFollowees } from '@shared/hooks/query/user.query'
import { useIntersect } from '@shared/hooks'

interface FolloweesList {
  userId: number | undefined
}

export default function FolloweesList({ userId }: FolloweesList) {
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

  return (
    <>
      <ul className="flex flex-col gap-6 mt-10 tablet:gap-5 mobile:mt-5">
        {followees.map((followee) => (
          <Follow key={followee.id} {...followee.followee} />
        ))}
      </ul>
      <div className="w-[1px] h-2.5" ref={ref}></div>
    </>
  )
}