import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateMyProfile } from '@shared/api'

export function useUpdateProfile() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateMyProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-profile'] })
    },
  })
}
