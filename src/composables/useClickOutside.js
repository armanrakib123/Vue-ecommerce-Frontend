import { onMounted, onUnmounted } from 'vue'

export function useClickOutside(targetRef, handler) {
  function listener(event) {
    if (!targetRef.value || targetRef.value.contains(event.target)) {
      return
    }
    handler(event)
  }

  onMounted(() => {
    document.addEventListener('pointerdown', listener)
  })

  onUnmounted(() => {
    document.removeEventListener('pointerdown', listener)
  })
}
