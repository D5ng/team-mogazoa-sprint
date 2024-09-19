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
import type { UserItem, UserFetch } from '@shared/types'

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

export function useFetchCreatedProducts({ userId }: UserFetch) {
  return useSuspenseInfiniteQuery({
    queryKey: ['created-products', userId],
    queryFn: ({ pageParam }) =>
      fetchUsersCreatedProduct({ userId, cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
    select: (data) => (data.pages ?? []).flatMap((page) => page.list),
  })
}

export function useFetchReviewedProducts({ userId }: UserFetch) {
  return useSuspenseInfiniteQuery({
    queryKey: ['reviewed-products', userId],
    queryFn: ({ pageParam }) =>
      fetchUsersReviewedProduct({ userId, cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
    select: (data) => (data.pages ?? []).flatMap((page) => page.list),
  })
}

export function useFetchFavoriteProducts({ userId }: UserFetch) {
  return useSuspenseInfiniteQuery({
    queryKey: ['favorite-products', userId],
    queryFn: ({ pageParam }) =>
      fetchUsersFavoriteProduct({ userId, cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
    select: (data) => (data.pages ?? []).flatMap((page) => page.list),
  })
}

export function useFetchFollowers({ userId }: UserFetch) {
  return useSuspenseInfiniteQuery({
    queryKey: ['followers', userId],
    queryFn: ({ pageParam }) =>
      fetchUsersFollowers({ userId, cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
    select: (data) => (data.pages ?? []).flatMap((page) => page.list),
  })
}

export function useFetchFollowees({ userId }: UserFetch) {
  return useSuspenseInfiniteQuery({
    queryKey: ['followees', userId],
    queryFn: ({ pageParam }) =>
      fetchUsersFollowees({ userId, cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
    select: (data) => (data.pages ?? []).flatMap((page) => page.list),
  })
}
