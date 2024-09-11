import axios from 'axios'
import getCookies from './getCookies'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof document !== 'undefined') {
      const accessToken = getCookies()
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosInstance
