import apiClient from '@/services/http/client.js'

export const supportApi = {
  getTickets() { return apiClient.get('/support/tickets') },
  getTicket(id) { return apiClient.get(`/support/tickets/${id}`) },
  createTicket(payload) { return apiClient.post('/support/tickets', payload) },
  replyToTicket(ticketId, message) {
    return apiClient.post(`/support/tickets/${ticketId}/reply`, message)
  }
}
