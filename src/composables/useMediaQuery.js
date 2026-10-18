import { ref, onMounted, onUnmounted } from 'vue'

export function useMediaQuery(query) {
  const matches = ref(false)

  onMounted(() => {
    const media = window.matchMedia(query)
    matches.value = media.matches

    const listener = (e) => {
      matches.value = e.matches
    }

    media.addEventListener('change', listener)
    onUnmounted(() => media.removeEventListener('change', listener))
  })

  return matches
}
