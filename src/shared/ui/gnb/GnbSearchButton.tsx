import Image from 'next/image'
import { search } from '@shared/icons'

interface GnbSearchButtonProps {
  toggleSearchInput: () => void
}

export default function GnbSearchButton({
  toggleSearchInput,
}: GnbSearchButtonProps) {
  return (
    <div
      className={`hidden    mobile:absolute mobile:block mobile:right-[10%] mobile:translate-y-[50%] mobile:translate-x-[120%]`}
    >
      <button onClick={() => toggleSearchInput()} className="search">
        <Image src={search} width={30} height={10} alt="돋보기버튼" />
      </button>
    </div>
  )
}
