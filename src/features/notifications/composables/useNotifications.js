import { ref } from 'vue'

export function useNotifications() {
  const notifications = ref([
    {
      id: 'notif_1',
      title: 'Order Dispatched',
      message: 'Your order NX-2026-8942 has been handed over to FedEx Express.',
      time: '15m ago',
      read: false,
      type: 'shipping'
    },
    {
      id: 'notif_2',
      title: 'Price Drop Alert',
      message: 'AuraStudio Pro wireless headphone is now 15% off!',
      time: '2h ago',
      read: false,
      type: 'deal'
    },
    {
      id: 'notif_3',
      title: 'Security Notice',
      message: 'New login detected from Chrome macOS in San Francisco.',
      time: 'Yesterday',
      read: true,
      type: 'security'
    }
  ])

  function markRead(id) {
    const item = notifications.value.find(n => n.id === id)
    if (item) item.read = true
  }

  function markAllAsRead() {
    notifications.value.forEach(n => n.read = true)
  }

  return { notifications, markRead, markAllAsRead }
}
