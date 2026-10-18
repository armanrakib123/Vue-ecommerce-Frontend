import apiClient from '@/services/http/client.js'
export const searchApi = {
  search(q) { return apiClient.get('/catalog/products', { params: { search: q } }) }
}
