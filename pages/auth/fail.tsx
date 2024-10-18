import { Button } from '@shared/ui'
import { useRouter } from 'next/router'
import React from 'react'

export default function Fail() {
  const router = useRouter()
  const handleClick = () => router.push('/')
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center text-white gap-y-5">
      <div className="mx-auto flex flex-col items-center gap-y-5 px-5 py-7">
        <h3 className="text-xl font-semibold">잠시 후 다시 시도해주세요.</h3>
        <p className="text-base text-black-30">
          현재 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
        </p>
        <Button variant="primary" className="w-[400px]" onClick={handleClick}>
          메인 페이지로 이동하기
        </Button>
      </div>
    </main>
  )
}
