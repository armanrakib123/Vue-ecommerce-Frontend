import apiClient from '@/services/http/client.js'

export const promotionsApi = {
  validateCoupon(code) {
    return apiClient.post('/promotions/validate-coupon', { code })
  },
  getActivePromotions() {
    return apiClient.get('/promotions')
  }
}
