import { delay, http, HttpResponse } from 'msw'

interface SignUpData {
  email: string
  nickname: string
}

export const registerHandler = http.post(
  `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signUp`,
  async ({ request }) => {
    const data = (await request.json()) as SignUpData

    await delay(1000)
    return HttpResponse.json({
      message: '회원가입이 완료되었습니다',
      user: {
        id: 1,
        email: data.email,
        nickname: data.nickname,
      },
    })
  },
)
