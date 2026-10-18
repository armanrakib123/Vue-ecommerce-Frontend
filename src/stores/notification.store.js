import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotificationStore = defineStore('notification', () => {
  const toasts = ref([])

  function showToast({ title, message, type = 'info', duration = 4000 }) {
    const id = `toast_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`
    const toast = { id, title, message, type }
    toasts.value.push(toast)

    if (duration > 0) {
      setTimeout(() => {
        dismissToast(id)
      }, duration)
    }
    return id
  }

  function success(message, title = 'Success') {
    return showToast({ title, message, type: 'success' })
  }

  function error(message, title = 'Error') {
    return showToast({ title, message, type: 'error', duration: 6000 })
  }

  function info(message, title = 'Notice') {
    return showToast({ title, message, type: 'info' })
  }

  function warning(message, title = 'Warning') {
    return showToast({ title, message, type: 'warning' })
  }

  function dismissToast(id) {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  return {
    toasts,
    showToast,
    success,
    error,
    info,
    warning,
    dismissToast,
  }
})
