import { ref } from 'vue'
import { mockCategories } from '@/mocks/fixtures/categories.json.js'
export function useCategoryTree() {
  const tree = ref(mockCategories)
  return { tree }
}
