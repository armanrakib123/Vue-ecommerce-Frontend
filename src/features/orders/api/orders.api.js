import apiClient from '@/services/http/client.js'
export const ordersApi = {
  getOrders() { return apiClient.get('/orders') },
  getOrder(id) { return apiClient.get(`/orders/${id}`) }
}
