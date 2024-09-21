import { useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query'
import {
  fetchMyProfile,
  fetchUserProfile,
  fetchUsersCreatedProduct,
  fetchUsersReviewedProduct,
  fetchUsersFavoriteProduct,
  fetchUsersFollowees,
  fetchUsersFollowers,
} from '@shared/api'
import type { UserItem, UserFetch, UserId } from '@shared/types'
import { userKeys } from '@shared/hooks/query-keys'

export function useFetchMyProfile() {
  return useQuery<UserItem>({
    queryKey: userKeys.profile.myProfile,
    queryFn: fetchMyProfile,
  })
}

export function useFetchUserProfile(userId: UserId) {
  return useQuery<UserItem>({
    queryKey: userKeys.profile.userProfile(userId),
    queryFn: () => fetchUserProfile({ userId }),
  })
}

export function useFetchCreatedProducts({ userId }: UserFetch) {
  return useSuspenseInfiniteQuery({
    queryKey: userKeys.products.created(userId),
    queryFn: ({ pageParam }) =>
      fetchUsersCreatedProduct({ userId, cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
    select: (data) => (data.pages ?? []).flatMap((page) => page.list),
  })
}

export function useFetchReviewedProducts({ userId }: UserFetch) {
  return useSuspenseInfiniteQuery({
    queryKey: userKeys.products.reviewed(userId),
    queryFn: ({ pageParam }) =>
      fetchUsersReviewedProduct({ userId: userId!, cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
    select: (data) => (data.pages ?? []).flatMap((page) => page.list),
  })
}

export function useFetchFavoriteProducts({ userId }: UserFetch) {
  return useSuspenseInfiniteQuery({
    queryKey: userKeys.products.favorite(userId),
    queryFn: ({ pageParam }) =>
      fetchUsersFavoriteProduct({ userId, cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
    select: (data) => (data.pages ?? []).flatMap((page) => page.list),
  })
}

export function useFetchFollowers({ userId }: UserFetch) {
  return useSuspenseInfiniteQuery({
    queryKey: userKeys.follow.followers(userId),
    queryFn: ({ pageParam }) =>
      fetchUsersFollowers({ userId, cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
    select: (data) => (data.pages ?? []).flatMap((page) => page.list),
  })
}

export function useFetchFollowees({ userId }: UserFetch) {
  return useSuspenseInfiniteQuery({
    queryKey: userKeys.follow.followees(userId),
    queryFn: ({ pageParam }) =>
      fetchUsersFollowees({ userId, cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
    select: (data) => (data.pages ?? []).flatMap((page) => page.list),
  })
}
