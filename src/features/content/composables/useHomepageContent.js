import { ref } from 'vue'

export function useHomepageContent() {
  const announcements = ref([
    'Worldwide Express Shipping Enabled • 30-Day Hassle-Free Returns'
  ])
  return { announcements }
}
