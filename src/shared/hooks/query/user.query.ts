import { useQuery } from '@tanstack/react-query'
import { UserItem } from '@shared/types'
import { fetchMyProfile, fetchUserProfile } from '@/src/shared/api'

export function useFetchMyProfile() {
  return useQuery<UserItem>({
    queryKey: ['my-profile'],
    queryFn: fetchMyProfile,
  })
}

export function useFetchUserProfile(userId: number) {
  return useQuery<UserItem>({
    queryKey: ['user-profile', userId],
    queryFn: () => fetchUserProfile({ userId }),
  })
}
