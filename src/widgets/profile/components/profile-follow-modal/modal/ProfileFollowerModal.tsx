import { Suspense } from 'react'
import { FollowerList, FollowListSkeleton } from '@widgets/profile/components'
import { Modal, ModalTitle } from '@shared/ui'
import type { UserId } from '@shared/types'

export interface ReviewCreateModalProps {
  userId: UserId
  nickname: string
  onCloseToggle: () => void
}

export default function ProfileFollowerModal({
  userId,
  nickname,
  onCloseToggle,
}: ReviewCreateModalProps) {
  return (
    <Modal
      onCloseModal={onCloseToggle}
      className="h-[660px] tablet:h-[600px] mobile:h-[550px]"
    >
      <ModalTitle>{nickname}님을 팔로우하는 유저</ModalTitle>
      <Suspense fallback={<FollowListSkeleton />}>
        <FollowerList userId={userId} />
      </Suspense>
    </Modal>
  )
}
