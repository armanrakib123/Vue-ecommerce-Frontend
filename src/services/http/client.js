import axios from 'axios'
import { env } from '@/config/env.js'
import { setupInterceptors } from './interceptors.js'
import { mockApi } from '@/mocks/browser.js'

// Real Axios instance
export const httpClient = axios.create({
  baseURL: env.API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

setupInterceptors(httpClient)

// Mock delay helper
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

/**
 * Universal API Client: switches to mockApi when enableMockApi is true,
 * otherwise routes through real Axios httpClient.
 */
export const apiClient = {
  async get(url, config = {}) {
    if (env.ENABLE_MOCK_API) {
      await delay(env.MOCK_DELAY_MS)
      const params = config.params || {}

      if (url.startsWith('/catalog/products/')) {
        const slug = url.replace('/catalog/products/', '')
        return { data: await mockApi.getProductBySlug(slug) }
      }
      if (url === '/catalog/products') {
        return { data: await mockApi.getProducts(params) }
      }
      if (url === '/catalog/categories') {
        return { data: await mockApi.getCategories() }
      }
      if (url.startsWith('/orders/')) {
        const id = url.replace('/orders/', '')
        return { data: await mockApi.getOrderById(id) }
      }
      if (url === '/orders') {
        return { data: await mockApi.getOrders(params.customerId) }
      }
      if (url === '/inventory') {
        return { data: await mockApi.getInventory() }
      }
      if (url === '/support/tickets') {
        return { data: await mockApi.getTickets() }
      }
    }
    return httpClient.get(url, config)
  },

  async post(url, data = {}, config = {}) {
    if (env.ENABLE_MOCK_API) {
      await delay(env.MOCK_DELAY_MS)

      if (url === '/auth/login') {
        return { data: await mockApi.login(data.email, data.password) }
      }
      if (url === '/orders') {
        return { data: await mockApi.createOrder(data) }
      }
      if (url === '/catalog/products') {
        return { data: await mockApi.addProduct(data) }
      }
      if (url.startsWith('/support/tickets/') && url.endsWith('/reply')) {
        const id = url.split('/')[3]
        return { data: await mockApi.addTicketMessage(id, data.text, data.sender) }
      }
      if (url === '/promotions/validate-coupon') {
        return { data: await mockApi.validateCoupon(data.code) }
      }
    }
    return httpClient.post(url, data, config)
  },

  async put(url, data = {}, config = {}) {
    if (env.ENABLE_MOCK_API) {
      await delay(env.MOCK_DELAY_MS)
      if (url.startsWith('/inventory/adjust')) {
        return { data: await mockApi.adjustStock(data.sku, data.delta, data.reason) }
      }
      return { data }
    }
    return httpClient.put(url, data, config)
  },

  async delete(url, config = {}) {
    if (env.ENABLE_MOCK_API) {
      await delay(env.MOCK_DELAY_MS)
      return { data: { success: true } }
    }
    return httpClient.delete(url, config)
  }
}

export default apiClient
