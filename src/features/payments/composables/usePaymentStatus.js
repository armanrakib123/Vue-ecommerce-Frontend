import { ref } from 'vue'
export function usePaymentStatus() {
  const status = ref('idle')
  return { status }
}
