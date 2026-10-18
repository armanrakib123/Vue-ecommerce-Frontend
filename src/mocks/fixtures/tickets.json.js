import { TICKET_STATUS } from '@/utils/constants.js'

export const mockTickets = [
  {
    id: 'tkt_1092',
    ticketNumber: 'TCK-2026-1092',
    subject: 'Request to update delivery address for Order #NX-2026-984210',
    category: 'Shipping & Delivery',
    priority: 'High',
    status: TICKET_STATUS.OPEN,
    customer: {
      name: 'Sarah Connor',
      email: 'sarah.customer@nexora.io',
      phone: '+1 (555) 234-5678',
    },
    assignedTo: 'Elena Rostova',
    createdAt: '2026-10-17T09:15:00Z',
    messages: [
      {
        id: 'msg_1',
        sender: 'customer',
        senderName: 'Sarah Connor',
        timestamp: '2026-10-17T09:15:00Z',
        text: 'Hi support team, I noticed I entered apartment 4B instead of 4A. Can you redirect the courier?'
      },
      {
        id: 'msg_2',
        sender: 'agent',
        senderName: 'Elena Rostova',
        timestamp: '2026-10-17T09:30:00Z',
        text: 'Hello Sarah! I see the FedEx courier label was generated this morning. I have notified FedEx dispatch and updated your dispatch notes to Apt 4A.'
      }
    ]
  },
  {
    id: 'tkt_1093',
    ticketNumber: 'TCK-2026-1093',
    subject: 'Warranty inquiry for Chronos Vanguard Titanium',
    category: 'Product Inquiry',
    priority: 'Medium',
    status: TICKET_STATUS.RESOLVED,
    customer: {
      name: 'David Kim',
      email: 'david.k@example.com',
    },
    assignedTo: 'Elena Rostova',
    createdAt: '2026-10-16T14:00:00Z',
    messages: [
      {
        id: 'msg_3',
        sender: 'customer',
        senderName: 'David Kim',
        timestamp: '2026-10-16T14:00:00Z',
        text: 'Does the 2-year warranty include accidental sapphire glass damage?'
      },
      {
        id: 'msg_4',
        sender: 'agent',
        senderName: 'Elena Rostova',
        timestamp: '2026-10-16T14:25:00Z',
        text: 'Hi David! Yes, Nexora Care covers one accidental sapphire crystal replacement in the first 24 months with a zero deductible.'
      }
    ]
  }
]
