import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useWishlistStore } from '@/stores/wishlist.store.js'

describe('wishlist.store.js', () => {
  beforeEach(() => { setActivePinia(createPinia()) })
  it('toggles wishlist items', () => {
    const store = useWishlistStore()
    const p = { id: 'test_1', name: 'Item 1' }
    store.toggleWishlist(p)
    expect(store.isInWishlist('test_1')).toBe(true)
    store.toggleWishlist(p)
    expect(store.isInWishlist('test_1')).toBe(false)
  })
})
