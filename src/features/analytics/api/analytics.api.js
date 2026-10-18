import apiClient from '@/services/http/client.js'

export const analyticsApi = {
  getOverview(range) { return apiClient.get('/analytics/overview', { params: range }) },
  getSalesReport(range) { return apiClient.get('/analytics/sales', { params: range }) },
  getProductPerformance() { return apiClient.get('/analytics/products') }
}
