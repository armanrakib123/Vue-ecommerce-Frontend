import { ref } from 'vue'
import { sharedTickets } from './useSupportTickets.js'

export function useTicketConversation(ticketId) {
  const ticket = ref(sharedTickets.value.find(t => t.id === ticketId || t.ticketNumber === ticketId) || sharedTickets.value[0])

  function sendReply(text, sender = 'support') {
    if (!text.trim() || !ticket.value) return
    const msg = {
      id: `msg_${Date.now()}`,
      sender,
      senderName: sender === 'support' ? 'Support Agent' : ticket.value.customer.name,
      timestamp: new Date().toISOString(),
      text
    }
    ticket.value.messages.push(msg)
  }

  return { ticket, sendReply }
}
