import { ref } from 'vue'
import { mockOrders } from '@/mocks/fixtures/orders.json.js'
export function useOrderDetails(id) {
  const order = ref(mockOrders[0])
  return { order }
}
