import Image from 'next/image'
import { toast } from 'react-toastify'
import { share } from '@shared/icons'

export default function ClipBoardButton() {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      toast.success('클립보드가 복사되었습니다')
    } catch (err) {
      const errorMessage = '클립보드를 복사하는데 에러가 발생했습니다'
      console.error(errorMessage)
      toast.error(errorMessage)
    }
  }

  return (
    <button
      className="flex justify-center items-center w-[28px] h-[28px] rounded-md bg-black-60 tablet:w-[24px] tablet:h-[24px]"
      onClick={copyToClipboard}
    >
      <Image
        src={share}
        alt="클립보드 복사하기"
        width={18}
        height={18}
        className="mobile:w-[14px] mobile:h-[14px]"
      />
    </button>
  )
}
