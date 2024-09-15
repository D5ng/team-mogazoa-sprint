import { FollowerList } from '@widgets/profile-follow-modal/components'
import { Modal, ModalTitle } from '@shared/ui'
import { Suspense } from 'react'

export interface ReviewCreateModalProps {
  userId: number
  onCloseToggle: () => void
}

export default function ProfileFollowModal({
  userId,
  onCloseToggle,
}: ReviewCreateModalProps) {
  return (
    <Modal
      onCloseModal={onCloseToggle}
      className="h-[660px] overflow-y-auto  tablet:h-[600px] mobile:h-[550px] custom-scrollbar"
    >
      <ModalTitle>마수리님을 팔로우하는 유저</ModalTitle>
      <Suspense fallback={<div></div>}>
        <FollowerList userId={userId} />
      </Suspense>
    </Modal>
  )
}
