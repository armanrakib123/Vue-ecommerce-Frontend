import { ref } from 'vue'
import { useSettingsStore } from '../stores/settings.store.js'

export function useSettings() {
  const store = useSettingsStore()
  const settings = ref({ ...store.general })
  return { settings }
}
