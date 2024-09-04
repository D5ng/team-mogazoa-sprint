import { RankingChipProps } from './Ranking.types'
import { RANKING_VARIANT } from './RankingChip.constant'

export default function RankingChip({ variant }: RankingChipProps) {
  const defaultStyle = `text-[12px] px-[8px] py-[2px] rounded-[50px] bg-opacity-10 inline-block`
  const variantStyle = RANKING_VARIANT[variant]
  return <div className={`${variantStyle} ${defaultStyle}`}>1등</div>
}
