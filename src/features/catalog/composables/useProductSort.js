import { ref } from 'vue'

export function useProductSort() {
  const sortBy = ref('featured')
  return { sortBy }
}
