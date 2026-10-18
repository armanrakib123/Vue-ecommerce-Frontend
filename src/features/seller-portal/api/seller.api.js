import apiClient from '@/services/http/client.js'

export const sellerApi = {
  getStats() { return apiClient.get('/seller/stats') },
  getProducts() { return apiClient.get('/seller/products') },
  getOrders() { return apiClient.get('/seller/orders') },
  getPayouts() { return apiClient.get('/seller/payouts') },
  updateProfile(profile) { return apiClient.put('/seller/profile', profile) }
}
