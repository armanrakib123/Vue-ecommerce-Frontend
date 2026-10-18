import apiClient from '@/services/http/client.js'

export const shippingApi = {
  getShippingMethods(destination) {
    return apiClient.get('/shipping/methods', { params: destination })
  },
  trackShipment(trackingNumber) {
    return apiClient.get(`/shipping/track/${trackingNumber}`)
  },
  validateAddress(address) {
    return apiClient.post('/shipping/validate-address', address)
  }
}
