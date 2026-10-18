import apiClient from '@/services/http/client.js'

export const settingsApi = {
  getSettings() { return apiClient.get('/settings') },
  updateSettings(data) { return apiClient.put('/settings', data) }
}
