import apiClient from '@/services/http/client.js'

export const inventoryApi = {
  getInventory() { return apiClient.get('/inventory') },
  adjustStock(sku, delta, reason) {
    return apiClient.put('/inventory/adjust', { sku, delta, reason })
  },
  getMovements() { return apiClient.get('/inventory/movements') }
}
