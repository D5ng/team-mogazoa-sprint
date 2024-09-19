import { Modal, ModalTitle } from '@shared/ui'
import { ProfileEditForm } from '@widgets/profile/components'

export interface ReviewCreateModalProps {
  onCloseToggle: () => void
}

export default function ProfileEditModal({
  onCloseToggle,
}: ReviewCreateModalProps) {
  return (
    <Modal onCloseModal={onCloseToggle}>
      <ModalTitle>프로필 편집</ModalTitle>
      <ProfileEditForm onCloseToggle={onCloseToggle} />
    </Modal>
  )
}
