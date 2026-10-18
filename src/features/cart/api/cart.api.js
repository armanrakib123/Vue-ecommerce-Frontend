import apiClient from '@/services/http/client.js'
export const cartApi = {
  getCart() { return apiClient.get('/cart') },
  syncCart(items) { return apiClient.post('/cart/sync', { items }) }
}
