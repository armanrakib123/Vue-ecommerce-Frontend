import apiClient from '@/services/http/client.js'

export const catalogApi = {
  getProducts(params) { return apiClient.get('/catalog/products', { params }) },
  getProduct(slug) { return apiClient.get(`/catalog/products/${slug}`) },
  getCategories() { return apiClient.get('/catalog/categories') },
}
