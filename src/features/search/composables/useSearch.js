import { ref } from 'vue'
import { mockProducts } from '@/mocks/fixtures/products.json.js'

export function useSearch() {
  const results = ref(mockProducts)
  return { results }
}
