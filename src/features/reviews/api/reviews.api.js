import apiClient from '@/services/http/client.js'

export const reviewsApi = {
  getProductReviews(productId, params) {
    return apiClient.get(`/catalog/products/${productId}/reviews`, { params })
  },
  submitReview(productId, reviewData) {
    return apiClient.post(`/catalog/products/${productId}/reviews`, reviewData)
  },
  markHelpful(reviewId) {
    return apiClient.post(`/reviews/${reviewId}/helpful`)
  }
}
