import { FollowerList } from '@/src/widgets/profile-follow-modal'
import { Modal, ModalTitle } from '@shared/ui'
import { Suspense } from 'react'

export interface ReviewCreateModalProps {
  userId: number | undefined
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
      <Suspense fallback={<div></div>}>
        <FollowerList userId={userId} />
      </Suspense>
    </Modal>
  )
}
