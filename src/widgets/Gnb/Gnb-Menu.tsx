import Link from 'next/link'

export default function GnbMenu({ isSigned = false }: { isSigned?: boolean }) {
  // 로그인 여부 받아오는 로직은 후에 로그인 구현 되면 수정 하겠습니다
  return (
    <>
      {isSigned ? (
        <>
          <Link className="hover:text-blue" href="/compare">
            비교하기
          </Link>
          <Link className="hover:text-blue" href="/profile">
            내 프로필
          </Link>
        </>
      ) : (
        <>
          <Link className="hover:text-blue" href="/signIn">
            로그인
          </Link>
          <Link className="hover:text-blue" href="/signUp">
            회원가입
          </Link>
        </>
      )}
    </>
  )
}
