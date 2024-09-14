import { useQueryClient, useMutation } from '@tanstack/react-query'
import { followUser, unFollowUser } from '@shared/api'

export function useFollowUser() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: followUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['follow'] })
    },
  })
}

export function useUnFollowUser() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: unFollowUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['follow'] })
    },
  })
}
