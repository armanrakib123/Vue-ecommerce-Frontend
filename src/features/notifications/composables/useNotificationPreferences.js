import { ref } from 'vue'

export function useNotificationPreferences() {
  const preferences = ref({
    emailOrders: true,
    emailMarketing: false,
    smsAlerts: true,
    browserPush: true
  })
  return { preferences }
}
