import { axiosInstance } from '@/src/shared/config'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { code, state } = req.query

    if (!code) {
      throw new Error('failed to login to Kakao')
    }
    const data = {
      nickname: state! as string,
      redirectUri: `http://localhost:3000/api/kakao/signUp`,
      token: code,
    }

    try {
      const result = await axiosInstance.post(`/auth/signUp/kakao`, data)

      console.log(result)
    } catch (error) {
      console.log('회원가입 에러')
    }
  } catch (error) {
    res.status(500).json('failed to sign up')
  }
}
