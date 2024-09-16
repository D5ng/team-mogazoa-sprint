import { socialSignIn } from '@shared/api'
import { axiosInstance } from '@shared/config'
import { setAuthToken } from '@shared/utils'
import { isAxiosError } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { code } = req.query
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
            redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI_SIGN_IN,
            grant_type: 'authorization_code',
          },
        )
      ).data
    }

    const { id_token } = await getToken()

    try {
      const result = await socialSignIn({
        social: 'google',
        redirectUri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI_SIGN_IN,
        token: id_token as string,
      })

      setAuthToken('auth', result, { req, res })

      res.redirect('/')
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        if (error.response.status === 403)
          return res.redirect('/auth/social-sign-up/google')
      }
      res.redirect('/error')
    }
  } catch (error) {
    res.status(500).json('failed to sign up')
  }
}
