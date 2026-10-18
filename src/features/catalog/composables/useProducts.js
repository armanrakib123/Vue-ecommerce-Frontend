import { ref } from 'vue'
import { mockProducts } from '@/mocks/fixtures/products.json.js'

export function useProducts() {
  const products = ref([...mockProducts])
  return { products }
}
