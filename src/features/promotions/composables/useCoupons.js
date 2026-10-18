import { ref } from 'vue'
import { mockCoupons } from '@/mocks/fixtures/coupons.json.js'

export function useCoupons() {
  const coupons = ref([...mockCoupons])
  return { coupons }
}
