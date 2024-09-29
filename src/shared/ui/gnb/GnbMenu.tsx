import useAuthStore from '@app/provider/authStore'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function GnbMenu({ cookie }: any) {
  const isSigned = cookie
  const router = useRouter()
  const { id: productId } = router.query

  const MENU_DEFAULT_STYLE =
    'hover:text-blue mobile:text-black-20 rounded-xl  font-semibold mobile:px-[10px] mobile:py-[2px] mobile:text-[14px] mobile:hover:border-blue  mobile:border-black-20 mobile:border'

  return (
    <>
      {isSigned ? (
        <div
          className={` flex gap-[40px] mobile:gap-[20px] mobile:flex-col  mobile:text-center justify-center shrink-0`}
        >
          <Link
            href={`${!productId ? '/compare' : `/compare?id=${productId}`}`}
            className={`${MENU_DEFAULT_STYLE}`}
          >
            비교하기
          </Link>

          <Link className={`${MENU_DEFAULT_STYLE}`} href="/profile/my">
            내 프로필
          </Link>
        </div>
      ) : (
        <div
          className={`flex gap-[40px] mobile:gap-[20px] mobile:flex-col  mobile:text-center justify-center shrink-0`}
        >
          <Link className={`${MENU_DEFAULT_STYLE}`} href="/auth/sign-in">
            로그인
          </Link>
          <Link className={`${MENU_DEFAULT_STYLE}`} href="/auth/sign-up">
            회원가입
          </Link>
        </div>
      )}
    </>
  )
}
