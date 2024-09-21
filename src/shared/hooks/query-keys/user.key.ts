import type { UserId } from '@shared/types'

export const userKeys = {
  profile: {
    myProfile: ['my-profile'] as const,
    userProfile: (userId: UserId) => ['user-profile', userId] as const,
  },
  products: {
    created: (userId: UserId) => ['created-products', userId] as const,
    reviewed: (userId: UserId) => ['reviewed-products', userId] as const,
    favorite: (userId: UserId) => ['favorite-products', userId] as const,
  },
  follow: {
    followers: (userId: UserId) => ['followers', userId] as const,
    followees: (userId: UserId) => ['followees', userId] as const,
  },
} as const
