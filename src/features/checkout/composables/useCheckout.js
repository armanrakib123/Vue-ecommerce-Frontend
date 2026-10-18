import { useCheckoutStore } from '../stores/checkout.store.js'
export function useCheckout() {
  const store = useCheckoutStore()
  return { checkout: store }
}
