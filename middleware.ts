import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const PROTECTED_PAGES = ['/my-profile']
export const RESTRICT_AUTH_PAGE = ['/sign-in', '/sign-up']

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.has('auth')
  const path = request.nextUrl.pathname
  const isProtectedPage = PROTECTED_PAGES.some((page) => path.startsWith(page))
  const isRestrictAuthPage = RESTRICT_AUTH_PAGE.some((page) =>
    path.startsWith(page),
  )

  if (!isLoggedIn && isProtectedPage)
    return NextResponse.redirect(new URL('/sign-in', request.url))

  if (isLoggedIn && isRestrictAuthPage)
    return NextResponse.redirect(new URL('/', request.url))

  return NextResponse.next()
}

export const config = {
  matcher: PROTECTED_PAGES,
}
