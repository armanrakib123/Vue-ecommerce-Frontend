import { ref } from 'vue'

export function useProductFilters() {
  const category = ref('all')
  const inStockOnly = ref(false)
  return { category, inStockOnly }
}
