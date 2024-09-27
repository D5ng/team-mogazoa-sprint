import Image from 'next/image'
import { emptyMessage } from '@shared/icons'

export default function EmptyProduct() {
  return (
    <div className="m-auto flex flex-col items-center gap-y-5 py-[115px]">
      <Image
        src={emptyMessage}
        alt=""
        width={49}
        height={41}
        className="w-auto h-[41px] tablet:h-[32px]"
      />
      <p className="text-black-30 text-lg tablet:text-base">
        아직 활동 내역이 없어요
      </p>
    </div>
  )
}
