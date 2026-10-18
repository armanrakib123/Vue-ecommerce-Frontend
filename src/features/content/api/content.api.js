import apiClient from '@/services/http/client.js'

export const contentApi = {
  getHomepageContent() { return apiClient.get('/content/homepage') },
  getBanners() { return apiClient.get('/content/banners') },
  subscribeNewsletter(email) { return apiClient.post('/content/newsletter', { email }) }
}
