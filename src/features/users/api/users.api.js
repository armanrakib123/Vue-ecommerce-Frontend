import apiClient from '@/services/http/client.js'

export const usersApi = {
  getProfile(id) { return apiClient.get(`/users/${id}`) },
  updateProfile(id, data) { return apiClient.put(`/users/${id}`, data) },
  getAddresses() { return apiClient.get('/users/addresses') },
}
