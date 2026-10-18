import apiClient from '@/services/http/client.js'
export const paymentsApi = {
  createPaymentIntent(data) { return apiClient.post('/payments/intent', data) }
}
