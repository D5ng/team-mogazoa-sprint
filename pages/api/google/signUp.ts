import { socialSignUp } from '@shared/api'
import { axiosInstance } from '@shared/config'
import { setAuthUser } from '@shared/utils'
import { isAxiosError } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { code, state } = req.query
    if (!code)
      throw new Error('구글 로그인에 실패했어요. redirect Uri를 확인해 주세요')

    const getToken = async () => {
      return (
        await axiosInstance.post<{ id_token: string }>(
          `https://accounts.google.com/o/oauth2/token`,
          {
            code,
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
            redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI_SIGN_UP,
            grant_type: 'authorization_code',
          },
        )
      ).data
    }

    const { id_token } = await getToken()

    try {
      const result = await socialSignUp({
        social: 'google',
        nickname: state! as string,
        redirectUri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI_SIGN_UP,
        token: id_token as string,
      })

      setAuthUser('auth', result, { req, res })
      res.redirect('/')
    } catch (error) {
      res.redirect('/error')
    }
  } catch (error) {
    res.status(500).json('failed to sign up')
  }
}
