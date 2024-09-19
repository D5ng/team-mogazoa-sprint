export type Variant = 'first' | 'second' | 'etc'

export type RankingChipProps = {
  rank: number
  variant: Variant
}

export interface RankingItems {
  rank: number
  image: string
  nickname: string
  followersCount: number
  reviewCount: number
  variant: Variant
  id: number
}

export interface RankingProps {
  data: RankingItems[]
}

export interface RankingUiProps {
  data: RankingItems
}
