import { delay, http, HttpResponse } from 'msw'

export const uploadHandler = http.post(
  `${process.env.NEXT_PUBLIC_BASE_URL}/images/upload`,
  async () => {
    await delay(1500)
    return HttpResponse.json({ url: '성공적인 url 반환' })
  },
)
