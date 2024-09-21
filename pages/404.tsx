import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@shared/ui'
import { emptyMessage } from '@shared/icons'

export default function NotFound() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center text-center p-6 mobile:p-4">
      <div className="flex flex-col items-center max-w-md w-full">
        <div className="relative w-[160px] h-[160px] mobile:w-[120px] mobile:h-[120px] mb-8 mobile:mb-6 flex items-center justify-center">
          <Image
            src={emptyMessage}
            alt=""
            width={49}
            height={41}
            className="w-auto h-full object-contain"
          />
        </div>
        <h1 className="text-2xl font-semibold mb-3 mobile:text-xl">
          404 Not Found
        </h1>
        <p className="text-lg mb-2 mobile:text-base">
          찾을 수 없는 페이지입니다
        </p>
        <p className="text-gray-400 text-base mb-8 mobile:text-sm mobile:mb-6">
          요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요
        </p>
        <Link href="/" passHref>
          <Button
            variant="tertiary"
            className="px-6 text-base mobile:px-5 mobile:text-sm"
          >
            홈으로 돌아가기
          </Button>
        </Link>
      </div>
    </div>
  )
}
