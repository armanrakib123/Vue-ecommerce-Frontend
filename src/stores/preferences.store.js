import { defineStore } from 'pinia'
import { ref } from 'vue'
import { STORAGE_KEYS } from '@/utils/constants.js'
import { storage } from '@/services/storage/local-storage.js'
import { appConfig } from '@/config/app.config.js'

export const usePreferencesStore = defineStore('preferences', () => {
  const isDarkMode = ref(storage.get(STORAGE_KEYS.THEME, false))
  const currency = ref(storage.get('nexora_currency', appConfig.defaultCurrency))
  const locale = ref(storage.get(STORAGE_KEYS.LOCALE, appConfig.defaultLocale))

  function setDarkMode(enabled) {
    isDarkMode.value = enabled
    storage.set(STORAGE_KEYS.THEME, enabled)
    if (enabled) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  function toggleDarkMode() {
    setDarkMode(!isDarkMode.value)
  }

  function setCurrency(currCode) {
    currency.value = currCode
    storage.set('nexora_currency', currCode)
  }

  function setLocale(loc) {
    locale.value = loc
    storage.set(STORAGE_KEYS.LOCALE, loc)
  }

  // Initialize DOM dark mode state
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  }

  return {
    isDarkMode,
    currency,
    locale,
    setDarkMode,
    toggleDarkMode,
    setCurrency,
    setLocale,
  }
})
