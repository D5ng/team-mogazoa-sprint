import { toast } from 'react-toastify'
import { useUserStore } from '@shared/store'

export const toastCheckAuth = () => {
  const { user } = useUserStore.getState()
  if (!user) {
    toast.error('로그인이 필요합니다')
    return false
  }
  return true
}
