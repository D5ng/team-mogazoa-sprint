import { socialSignIn } from '@/src/shared/api'
import { setAuthUser } from '@/src/shared/utils'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { code } = req.query

    if (!code) {
      throw new Error(
        '카카오 로그인에 실패했어요. redirect Uri를 확인해 주세요',
      )
    }

    try {
      const result = await socialSignIn({
        social: 'kakao',
        redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI_SIGN_IN,
        token: code as string,
      })

      setAuthUser('auth', result, { req, res })

      res.redirect('/')
    } catch (error) {
      res.redirect('/auth/oauth-sign-up/kakao')
    }
  } catch (error) {
    res.status(500).json('failed to sign up')
  }
}
