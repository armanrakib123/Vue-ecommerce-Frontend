import { ref } from 'vue'
export function usePaymentMethods() {
  const methods = ref(['card', 'apple_pay', 'paypal'])
  return { methods }
}
