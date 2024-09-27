import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateMyProfile } from '@shared/api'
import { userKeys } from '@shared/hooks/query-keys'

export function useUpdateProfile() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateMyProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.profile.myProfile })
    },
  })
}
