import { ref } from 'vue'
export function useSearchHistory() {
  const history = ref([])
  return { history }
}
