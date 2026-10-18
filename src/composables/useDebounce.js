import { ref, watch } from 'vue'

export function useDebounce(source, delayMs = 300) {
  const debouncedValue = ref(source.value)
  let timeoutId = null

  watch(source, (newVal) => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      debouncedValue.value = newVal
    }, delayMs)
  })

  return debouncedValue
}

export function debounce(fn, delayMs = 300) {
  let timeoutId
  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), delayMs)
  }
}
