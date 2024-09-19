export type Variant = 'first' | 'second' | 'etc'

export type RankingChipProps = {
  rank: number
  variant: Variant
}

export interface RankingItem {
  rank: number
  image: string
  nickname: string
  followersCount: number
  reviewCount: number
  variant: Variant
  id: number
}

export interface RankingProps {
  data: RankingItem[]
}

export interface RankingUiProps {
  data: RankingItem
}
