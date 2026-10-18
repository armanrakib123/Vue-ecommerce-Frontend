import { ref } from 'vue'
import { useSellerStore } from '../stores/seller.store.js'

export function useSellerProfile() {
  const store = useSellerStore()
  const profile = ref({ ...store.storeProfile })
  return { profile }
}
