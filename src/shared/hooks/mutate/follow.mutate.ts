import { useQueryClient, useMutation } from '@tanstack/react-query'
import { followUser, unFollowUser } from '@shared/api'
import { userKeys } from '@/src/shared/hooks/query-keys'
import type { FollowUser, UserItem } from '@shared/types'

const getUserProfileKey = userKeys.profile.userProfile

export function useFollowUser() {
  const queryClient = useQueryClient()

  return useMutation<void, Error, FollowUser>({
    mutationFn: followUser,
    onMutate: async ({ userId }) => {
      await queryClient.cancelQueries({
        queryKey: getUserProfileKey(userId),
      })

      const previousUserData = queryClient.getQueryData<UserItem>(
        getUserProfileKey(userId),
      )

      queryClient.setQueryData<UserItem>(
        getUserProfileKey(userId),
        (oldData) => ({
          ...oldData!,
          isFollowing: true,
        }),
      )

      return { previousUserData }
    },
    onSettled: (_, __, { userId }) => {
      queryClient.invalidateQueries({
        queryKey: getUserProfileKey(userId),
      })
    },
  })
}

export function useUnFollowUser() {
  const queryClient = useQueryClient()

  return useMutation<void, Error, FollowUser>({
    mutationFn: unFollowUser,
    onMutate: async ({ userId }) => {
      await queryClient.cancelQueries({
        queryKey: getUserProfileKey(userId),
      })

      const previousUserData = queryClient.getQueryData<UserItem>(
        getUserProfileKey(userId),
      )

      queryClient.setQueryData<UserItem>(
        getUserProfileKey(userId),
        (oldData) => ({
          ...oldData!,
          isFollowing: false,
        }),
      )

      return { previousUserData }
    },
    onSettled: (_, __, { userId }) => {
      queryClient.invalidateQueries({
        queryKey: getUserProfileKey(userId),
      })
    },
  })
}
