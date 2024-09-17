import { useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query'
import {
  fetchMyProfile,
  fetchUserProfile,
  fetchUsersFollowees,
  fetchUsersFollowers,
} from '@shared/api'
import type { UserItem, FetchFollows } from '@shared/types'

export function useFetchMyProfile() {
  return useQuery<UserItem>({
    queryKey: ['my-profile'],
    queryFn: fetchMyProfile,
  })
}

export function useFetchUserProfile(userId: number | undefined) {
  return useQuery<UserItem>({
    queryKey: ['user-profile', userId],
    queryFn: () => fetchUserProfile({ userId }),
  })
}

export function useFetchFollowers({ userId }: FetchFollows) {
  return useSuspenseInfiniteQuery({
    queryKey: ['followers', userId],
    queryFn: ({ pageParam }) =>
      fetchUsersFollowers({ userId, cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
    select: (data) => (data.pages ?? []).flatMap((page) => page.list),
  })
}

export function useFetchFollowees({ userId }: FetchFollows) {
  return useSuspenseInfiniteQuery({
    queryKey: ['followees', userId],
    queryFn: ({ pageParam }) =>
      fetchUsersFollowees({ userId, cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
    select: (data) => (data.pages ?? []).flatMap((page) => page.list),
  })
}
