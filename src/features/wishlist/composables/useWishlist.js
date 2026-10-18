import { useWishlistStore } from '@/stores/wishlist.store.js'
export function useWishlist() {
  const store = useWishlistStore()
  return { wishlist: store }
}
