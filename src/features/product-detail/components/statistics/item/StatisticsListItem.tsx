import Image from 'next/image'
import ProductComparisonMessage from '../calculate/ProductComparisonMessage'

interface StatisticsListItemProps {
  title: string
  score: number
  scoreMetric: number
  image: string
}

export default function StatisticsListItem({
  title,
  score,
  scoreMetric,
  image,
}: StatisticsListItemProps) {
  return (
    <li className="w-[300px] h-[190px] flex flex-col justify-center items-center gap-y-5 bg-black-60 border border-black-70 rounded-xl">
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <div className="flex gap-x-[5px]">
        <Image src={image} alt="" width={24} height={24} />
        <span className="text-2xl font-light text-black-20">{score}</span>
      </div>
      <ProductComparisonMessage
        title={title}
        score={score}
        scoreMetric={scoreMetric}
      />
    </li>
  )
}
