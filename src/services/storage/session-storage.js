export const sessionStorageService = {
  get(key, defaultValue = null) {
    try {
      const item = sessionStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (e) {
      return defaultValue
    }
  },

  set(key, value) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error(`Session storage write error:`, e)
    }
  },

  remove(key) {
    sessionStorage.removeItem(key)
  }
}
