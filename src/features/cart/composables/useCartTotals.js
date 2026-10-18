import { computed } from 'vue'
import { useCartStore } from '@/stores/cart.store.js'

export function useCartTotals() {
  const cartStore = useCartStore()
  return {
    subtotal: computed(() => cartStore.subtotal),
    grandTotal: computed(() => cartStore.grandTotal),
  }
}
