import { ref } from 'vue'
export function useSearchSuggestions() {
  const suggestions = ref(['Headphones', 'Titanium'])
  return { suggestions }
}
