import axios from 'axios'
import { getCookie } from 'cookies-next'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const cookie = getCookie('auth')

    if (!cookie) return config
    const parseCookie = JSON.parse(cookie!)
    config.headers.Authorization = `Bearer ${parseCookie.accessToken}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosInstance
