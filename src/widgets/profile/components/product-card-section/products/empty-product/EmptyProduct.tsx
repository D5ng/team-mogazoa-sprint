import Image from 'next/image'
import Loading from 'public/images/loading.svg'

export default function EmptyProduct() {
  return (
    <div className="flex flex-col items-center gap-5 w-full my-[120px] mobile:my-20">
      <Image src={Loading} alt="" />
      <p className="text-black-30">아직 활동 내역이 없어요</p>
    </div>
  )
}
