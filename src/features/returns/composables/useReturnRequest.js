import { ref } from 'vue'

export function useReturnRequest(onSuccess) {
  const isSubmitting = ref(false)

  async function submitReturn(payload) {
    isSubmitting.value = true
    try {
      await new Promise(r => setTimeout(r, 400))
      if (onSuccess) onSuccess(payload)
      return true
    } finally {
      isSubmitting.value = false
    }
  }

  return { isSubmitting, submitReturn }
}
