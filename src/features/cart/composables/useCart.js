import { useCartStore } from '@/stores/cart.store.js'
export function useCart() {
  const cartStore = useCartStore()
  return { cart: cartStore }
}
