import apiClient from '@/services/http/client.js'

export const loyaltyApi = {
  getLoyaltyStatus() { return apiClient.get('/loyalty/status') },
  getRewards() { return apiClient.get('/loyalty/rewards') },
  redeemReward(rewardId) { return apiClient.post('/loyalty/redeem', { rewardId }) }
}
