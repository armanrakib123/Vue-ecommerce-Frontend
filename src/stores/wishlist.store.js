import { defineStore } from 'pinia'
import { ref } from 'vue'
import { STORAGE_KEYS } from '@/utils/constants.js'
import { storage } from '@/services/storage/local-storage.js'
import { mockProducts } from '@/mocks/fixtures/products.json.js'

export const useWishlistStore = defineStore('wishlist', () => {
  const initialWishlist = [mockProducts[1]]
  const items = ref(storage.get(STORAGE_KEYS.WISHLIST, initialWishlist))

  function syncStorage() {
    storage.set(STORAGE_KEYS.WISHLIST, items.value)
  }

  function isInWishlist(productId) {
    return items.value.some(p => p.id === productId)
  }

  function toggleWishlist(product) {
    const exists = isInWishlist(product.id)
    if (exists) {
      items.value = items.value.filter(p => p.id !== product.id)
    } else {
      items.value.push(product)
    }
    syncStorage()
    return !exists
  }

  function removeFromWishlist(productId) {
    items.value = items.value.filter(p => p.id !== productId)
    syncStorage()
  }

  return {
    items,
    isInWishlist,
    toggleWishlist,
    removeFromWishlist,
  }
})
