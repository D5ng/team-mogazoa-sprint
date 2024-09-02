import Image from 'next/image'
import searchIcon from '@/src/app/assets/images/searchIcon.png'

export default function GnbInput() {
  return (
    <div className=" relative">
      <input
        className="text-14 text-white w-400 h-50 rounded-l px-40 py-5 bg-black-30"
        placeholder="상품 이름을 검색해 보세요"
      />
      <Image
        className="absolute left-13 top-16"
        src={searchIcon}
        width={20}
        height={20}
        alt="돋보기 아이콘"
      />
    </div>
  )
}
