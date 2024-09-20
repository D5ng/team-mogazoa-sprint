import { emptyReview } from '@shared/icons'
import Image from 'next/image'

export default function ReviewEmptyList() {
  return (
    <div className="m-auto flex flex-col items-center gap-y-5 py-[115px]">
      <Image
        src={emptyReview}
        alt=""
        width={49}
        height={40}
        className="tablet:h-[32px]"
      />
      <p className="text-black-30 text-lg tablet:text-base">
        여기는 아직 비어있네요.
      </p>
    </div>
  )
}
