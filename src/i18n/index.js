import { ref, computed } from 'vue'
import en from './locales/en.json'
import bn from './locales/bn.json'
import { STORAGE_KEYS } from '@/utils/constants.js'
import { storage } from '@/services/storage/local-storage.js'

const messages = { en, bn }
const currentLocale = ref(storage.get(STORAGE_KEYS.LOCALE, 'en'))

export function getNestedProperty(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj)
}

export function t(key, params = {}) {
  const activeMsgs = messages[currentLocale.value] || messages.en
  let text = getNestedProperty(activeMsgs, key) || getNestedProperty(messages.en, key) || key

  if (typeof text === 'string') {
    Object.keys(params).forEach(k => {
      text = text.replace(new RegExp(`{${k}}`, 'g'), params[k])
    })
  }

  return text
}

export function setLocale(locale) {
  if (messages[locale]) {
    currentLocale.value = locale
    storage.set(STORAGE_KEYS.LOCALE, locale)
    document.documentElement.lang = locale
  }
}

export function useI18n() {
  return {
    locale: computed(() => currentLocale.value),
    setLocale,
    t
  }
}

export const i18n = {
  install(app) {
    app.config.globalProperties.$t = t
    app.provide('i18n', {
      locale: currentLocale,
      setLocale,
      t
    })
  }
}

export default i18n
