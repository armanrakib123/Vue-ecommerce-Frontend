import { ref } from 'vue'
export function useCheckoutSteps() {
  const step = ref(1)
  return { step }
}
