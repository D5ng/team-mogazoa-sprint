import axios from 'axios'
import { getCookie } from 'cookies-next'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie('token')
    if (!token) return config

    config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosInstance
