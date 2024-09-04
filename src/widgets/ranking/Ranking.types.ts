export type RankingChipProps = {
  variant: 'first' | 'second' | 'etc'
}

export interface RankingProps {
  data: {
    profileImg: string
    nickName: string
    variant: 'first' | 'second' | 'etc'
    folower: number
    review: number
  }
}
