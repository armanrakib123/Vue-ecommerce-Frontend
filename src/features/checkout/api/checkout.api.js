import apiClient from '@/services/http/client.js'
export const checkoutApi = {
  createOrder(payload) { return apiClient.post('/orders', payload) }
}
