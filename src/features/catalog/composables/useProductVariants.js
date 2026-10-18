import { ref } from 'vue'

export function useProductVariants(variants = []) {
  const selectedVariant = ref(variants[0] || null)
  return { selectedVariant }
}
