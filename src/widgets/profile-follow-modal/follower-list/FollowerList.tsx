import { Follow } from '@/src/widgets/profile-follow-modal'
import { useFetchFollowers } from '@shared/hooks/query/user.query'
import { useIntersect } from '@shared/hooks'

interface FollowerList {
  userId: number | undefined
}

export default function FollowerList({ userId }: FollowerList) {
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
    <div className="w-full h-full overflow-y-auto custom-scrollbar">
      <ul className="flex flex-col gap-6 mt-10 tablet:gap-5 mobile:mt-5">
        {followers.map((follower) => (
          <Follow key={follower.id} {...follower.follower} />
        ))}
      </ul>
      <div className="w-[1px] h-2.5" ref={ref}></div>
    </div>
  )
}
