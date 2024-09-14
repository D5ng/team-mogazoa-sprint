import { FollowerList } from '@widgets/profile-follow-modal/components'
import { Modal, ModalTitle } from '@shared/ui'

export interface ReviewCreateModalProps {
  onCloseToggle: () => void
}

export default function ProfileFollowModal({
  onCloseToggle,
}: ReviewCreateModalProps) {
  return (
    <Modal
      onCloseModal={onCloseToggle}
      className="h-[660px] overflow-y-auto  tablet:h-[600px] mobile:h-[550px] custom-scrollbar"
    >
      <ModalTitle>마수리님을 팔로우하는 유저</ModalTitle>
      <FollowerList />
    </Modal>
  )
}
