import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchStore = defineStore('search', () => {
  const query = ref('')
  const recentSearches = ref(['Headphones', 'Titanium Smartwatch', 'Desk Lamp'])
  return { query, recentSearches }
})
