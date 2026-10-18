import apiClient from '@/services/http/client.js'
export const categoriesApi = {
  getAll() { return apiClient.get('/catalog/categories') }
}
