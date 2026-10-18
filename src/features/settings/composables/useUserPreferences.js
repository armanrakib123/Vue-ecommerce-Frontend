import { usePreferencesStore } from '@/stores/preferences.store.js'
export function useUserPreferences() {
  const store = usePreferencesStore()
  return { preferences: store }
}
