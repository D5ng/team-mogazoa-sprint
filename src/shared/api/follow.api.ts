import { axiosInstance } from '@shared/config'
import type { FollowUser } from '@shared/types'

export async function followUser(data: FollowUser) {
  return (await axiosInstance.post(`/follow`, data)).data
}

export async function unFollowUser(data: FollowUser) {
  return (await axiosInstance.delete(`/follow`, { data })).data
}
