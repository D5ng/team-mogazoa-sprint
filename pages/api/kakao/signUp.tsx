import { socialSignUp } from '@shared/api'
import { setAuthUser } from '@shared/utils'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { code, state } = req.query
    if (!code) {
      throw new Error(
        '카카오 회원가입에 실패했어요. redirect Uri를 확인해 주세요',
      )
    }

    try {
      const result = await socialSignUp({
        social: 'kakao',
        nickname: state! as string,
        redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI_SIGN_UP,
        token: code as string,
      })

      setAuthUser('auth', result, { req, res })
      res.redirect('/')
    } catch (error) {
      res.redirect('/auth/fail')
    }
  } catch (error) {
    res.status(500).json('failed to sign up')
  }
}
