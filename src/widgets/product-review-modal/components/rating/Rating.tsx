import RatingList from './RatingList'

export default function Rating() {
  return (
    <div className="flex items-center gap-x-5 mt-5">
      <span className="text-base text-black-30">별점</span>
      <RatingList />
    </div>
  )
}
