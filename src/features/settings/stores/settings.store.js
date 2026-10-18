import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const general = ref({
    storeName: 'Nexora Global Commerce',
    supportEmail: 'ops@nexora.io',
    maintenanceMode: false,
    orderPrefix: 'NX-2026-'
  })

  return { general }
})
