import Link from 'next/link'
import getCookies from '../../auth/lib/getCookies'

export default function GnbMenu() {
  const isSigned = getCookies()
  console.log(isSigned)
  const MENU_DEFAULT_STYLE =
    'hover:text-blue mobile:text-black-20 rounded-xl font-semibold mobile:px-[10px] mobile:py-[2px] mobile:text-[3vw] mobile:hover:border-blue  mobile:border-black-20'
  return (
    <>
      {isSigned ? (
        <div className="flex gap-[40px] mobile:gap-[20px] mobile:flex-col ">
          <Link href="compare" className={`${MENU_DEFAULT_STYLE}`}>
            비교하기
          </Link>
          <Link className={`${MENU_DEFAULT_STYLE}`} href="/profile">
            내 프로필
          </Link>
        </div>
      ) : (
        <div className="flex gap-[40px] mobile:gap-[20px] mobile:flex-col">
          <Link className={`${MENU_DEFAULT_STYLE}`} href="/sign-in">
            로그인
          </Link>
          <Link className={`${MENU_DEFAULT_STYLE}`} href="/sign-up">
            회원가입
          </Link>
        </div>
      )}
    </>
  )
}
