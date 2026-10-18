import apiClient from '@/services/http/client.js'

export const authApi = {
  login(email, password) {
    return apiClient.post('/auth/login', { email, password })
  },
  register(userData) {
    return apiClient.post('/auth/register', userData)
  },
  forgotPassword(email) {
    return apiClient.post('/auth/forgot-password', { email })
  },
  resetPassword(token, newPassword) {
    return apiClient.post('/auth/reset-password', { token, newPassword })
  },
  verifyOtp(email, otp) {
    return apiClient.post('/auth/verify-otp', { email, otp })
  }
}

export default authApi
