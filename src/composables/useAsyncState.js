import { ref } from 'vue'

export function useAsyncState(asyncFunction, initialData = null) {
  const data = ref(initialData)
  const isLoading = ref(false)
  const error = ref(null)

  async function execute(...args) {
    isLoading.value = true
    error.value = null
    try {
      const result = await asyncFunction(...args)
      data.value = result
      return result
    } catch (err) {
      error.value = err
      throw err
    } finally {
      isLoading.value = false
    }
  }

  return {
    data,
    isLoading,
    error,
    execute,
  }
}
