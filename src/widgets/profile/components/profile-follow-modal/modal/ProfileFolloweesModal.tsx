import { Suspense } from 'react'
import { FolloweesList, FollowListSkeleton } from '@widgets/profile/components'
import { Modal, ModalTitle } from '@shared/ui'
import type { UserId } from '@shared/types'

export interface ReviewCreateModalProps {
  userId: UserId
  nickname: string
  onCloseToggle: () => void
}

export default function ProfileFolloweesModal({
  userId,
  nickname,
  onCloseToggle,
}: ReviewCreateModalProps) {
  return (
    <Modal
      onCloseModal={onCloseToggle}
      className="h-[660px] overflow-y-auto tablet:h-[600px] mobile:h-[550px]"
    >
      <ModalTitle>{nickname}님이 팔로우하는 유저</ModalTitle>
      <Suspense fallback={<FollowListSkeleton />}>
        <FolloweesList userId={userId} />
      </Suspense>
    </Modal>
  )
}
