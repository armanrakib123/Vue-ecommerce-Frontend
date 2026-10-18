import { useOrdersStore } from '../stores/orders.store.js'
export function useOrders() {
  const store = useOrdersStore()
  return { orders: store.orders }
}
