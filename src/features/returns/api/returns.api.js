import apiClient from '@/services/http/client.js'

export const returnsApi = {
  getReturnRequests() { return apiClient.get('/returns') },
  getReturnDetails(id) { return apiClient.get(`/returns/${id}`) },
  createReturnRequest(data) { return apiClient.post('/returns', data) }
}
