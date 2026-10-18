import { ref } from 'vue'
import { mockProducts } from '@/mocks/fixtures/products.json.js'
import { mockOrders } from '@/mocks/fixtures/orders.json.js'

export function useSellerDashboard() {
  const stats = ref([
    { label: '30-Day Revenue', value: '$84,250.00', change: '+14.2%', trend: 'up' },
    { label: 'Merchant Orders', value: '312', change: '+8.1%', trend: 'up' },
    { label: 'Active SKUs', value: '18', change: '0%', trend: 'neutral' },
    { label: 'Fulfillment SLA', value: '99.4%', change: '+0.4%', trend: 'up' }
  ])

  const recentProducts = ref(mockProducts.slice(0, 5))
  const recentOrders = ref(mockOrders.slice(0, 5))

  return { stats, recentProducts, recentOrders }
}
