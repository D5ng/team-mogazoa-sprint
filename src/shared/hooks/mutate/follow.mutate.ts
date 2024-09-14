import { useQueryClient, useMutation } from '@tanstack/react-query'
import { followUser, unFollowUser } from '@shared/api'
import type { FollowUser } from '@shared/types'

export function useFollowUser() {
  const queryClient = useQueryClient()

  return useMutation<void, Error, FollowUser>({
    mutationFn: followUser,
    onMutate: async (newUser) => {
      await queryClient.cancelQueries({
        queryKey: ['user-profile', newUser.userId],
      })

      const previousUserData = queryClient.getQueryData([
        'user-profile',
        newUser.userId,
      ])

      queryClient.setQueryData(
        ['user-profile', newUser.userId],
        (oldData: any) => ({
          ...oldData,
          isFollowing: true,
        }),
      )

      return { previousUserData }
    },
    onSettled: (_, __, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['user-profile', variables.userId],
      })
    },
  })
}

export function useUnFollowUser() {
  const queryClient = useQueryClient()

  return useMutation<void, Error, FollowUser>({
    mutationFn: unFollowUser,
    onMutate: async (userToRemove) => {
      await queryClient.cancelQueries({
        queryKey: ['user-profile', userToRemove.userId],
      })

      const previousUserData = queryClient.getQueryData([
        'user-profile',
        userToRemove.userId,
      ])

      queryClient.setQueryData(
        ['user-profile', userToRemove.userId],
        (oldData: any) => ({
          ...oldData,
          isFollowing: false,
        }),
      )

      return { previousUserData }
    },
    onSettled: (_, __, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['user-profile', variables.userId],
      })
    },
  })
}
