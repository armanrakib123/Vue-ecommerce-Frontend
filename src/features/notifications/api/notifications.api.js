import apiClient from '@/services/http/client.js'

export const notificationsApi = {
  getNotifications() { return apiClient.get('/notifications') },
  markAsRead(id) { return apiClient.post(`/notifications/${id}/read`) },
  markAllRead() { return apiClient.post('/notifications/mark-all-read') },
  updatePreferences(prefs) { return apiClient.put('/notifications/preferences', prefs) }
}
