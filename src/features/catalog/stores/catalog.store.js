import { defineStore } from 'pinia'
import { ref } from 'vue'
import { mockProducts } from '@/mocks/fixtures/products.json.js'

export const useCatalogStore = defineStore('catalog', () => {
  const products = ref([...mockProducts])
  const selectedProduct = ref(null)

  function setProducts(items) { products.value = items }
  function selectProduct(p) { selectedProduct.value = p }

  return { products, selectedProduct, setProducts, selectProduct }
})
