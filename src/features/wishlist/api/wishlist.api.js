import apiClient from '@/services/http/client.js'
export const wishlistApi = {
  getWishlist() { return apiClient.get('/wishlist') }
}
