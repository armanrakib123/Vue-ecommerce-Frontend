import { ref } from 'vue'

export function useAccountSettings() {
  const settings = ref({ emailAlerts: true, twoFactor: true })
  return { settings }
}
