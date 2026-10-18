import { ref } from 'vue'
import { mockCategories } from '@/mocks/fixtures/categories.json.js'
export function useCategories() {
  const categories = ref([...mockCategories])
  return { categories }
}
