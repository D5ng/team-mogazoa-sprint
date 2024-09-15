import { axiosInstance } from '@/src/shared/config'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { code } = req.query

    if (!code) {
      throw new Error('failed to login to Kakao')
    }

    const data = {
      redirectUri: `http://localhost:3000/api/kakao/signIn`,
      token: code,
    }

    try {
      const result = await axiosInstance.post(`/auth/signIn/kakao`, data)

      console.log(result)
      res.redirect('/')
    } catch (error) {
      console.log(error)
      res.redirect('/auth/signUp/kakao')
    }
  } catch (error) {
    console.log(error)
  }
}
