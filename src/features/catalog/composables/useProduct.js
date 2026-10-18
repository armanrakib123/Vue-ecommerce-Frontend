import { ref } from 'vue'
import { mockProducts } from '@/mocks/fixtures/products.json.js'

export function useProduct(slug) {
  const product = ref(mockProducts.find(p => p.slug === slug) || mockProducts[0])
  return { product }
}
