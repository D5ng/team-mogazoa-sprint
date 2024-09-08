import Image from 'next/image'
import { share } from '@app/icons'

export default function ClipBoardButton() {
  return (
    <button className="flex justify-center items-center w-[28px] h-[28px] rounded-md bg-black-60">
      <Image src={share} alt="클립보드 복사하기" width={18} height={18} />
    </button>
  )
}
