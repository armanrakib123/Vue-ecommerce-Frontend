import { ref } from 'vue'
import { mockTickets } from '@/mocks/fixtures/tickets.json.js'

export const sharedTickets = ref([...mockTickets])

export function useSupportTickets() {
  const tickets = sharedTickets
  const filterStatus = ref('all')

  function addTicket(newTicketData) {
    const ticket = {
      id: `tkt_${Date.now()}`,
      ticketNumber: `TCK-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
      status: 'open',
      priority: newTicketData.priority || 'medium',
      category: newTicketData.category,
      subject: newTicketData.subject,
      customer: { name: 'Sarah Connor', email: 'sarah.connor@cyberdyne.io', tier: 'Platinum' },
      messages: [
        {
          id: `msg_${Date.now()}`,
          sender: 'customer',
          senderName: 'Sarah Connor',
          timestamp: new Date().toISOString(),
          text: newTicketData.description
        }
      ]
    }
    tickets.value.unshift(ticket)
    return ticket
  }

  return { tickets, filterStatus, addTicket }
}
