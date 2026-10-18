import { STORAGE_KEYS } from '@/utils/constants.js'
import { ApiError } from './api-error.js'

export function setupInterceptors(axiosInstance) {
  // Request interceptor
  axiosInstance.interceptors.request.use(
    config => {
      const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      config.headers['X-Request-Client'] = 'nexora-web-v1'
      return config
    },
    error => {
      return Promise.reject(ApiError.fromAxiosError(error))
    }
  )

  // Response interceptor
  axiosInstance.interceptors.response.use(
    response => {
      return response.data
    },
    error => {
      const apiError = ApiError.fromAxiosError(error)
      if (apiError.status === 401) {
        localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN)
        localStorage.removeItem(STORAGE_KEYS.AUTH_USER)
      }
      return Promise.reject(apiError)
    }
  )
}
