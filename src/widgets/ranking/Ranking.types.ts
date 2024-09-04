export type Variant = 'first' | 'second' | 'etc'

export type RankingChipProps = {
  rank: number
  variant: Variant
}

export interface RankingItem {
  rank: number
  profileImg: string
  nickName: string
  folower: number
  review: number
  variant: Variant
}

export interface RankingProps {
  data: RankingItem[]
}

export interface RankingUiProps {
  data: RankingItem
}
