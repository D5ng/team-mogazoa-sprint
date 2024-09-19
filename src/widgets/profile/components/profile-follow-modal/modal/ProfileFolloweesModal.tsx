import { Suspense } from 'react'
import { FolloweesList } from '@widgets/profile/components'
import { Modal, ModalTitle } from '@shared/ui'

export interface ReviewCreateModalProps {
  userId: number | undefined
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
      className="h-[660px] overflow-y-auto  tablet:h-[600px] mobile:h-[550px] custom-scrollbar"
    >
      <ModalTitle>{nickname}님이 팔로우하는 유저</ModalTitle>
      <Suspense fallback={<div></div>}>
        <FolloweesList userId={userId} />
      </Suspense>
    </Modal>
  )
}
