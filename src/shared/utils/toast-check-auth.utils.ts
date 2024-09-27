import { toast } from 'react-toastify'
import { getAuthUser } from './token.utils'

export const toastCheckAuth = () => {
  const user = getAuthUser()
  if (!user) {
    toast.error('로그인이 필요합니다')
    return false
  }
  return true
}
