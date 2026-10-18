<template>
  <form @submit.prevent="handleSubmit" class="flex gap-2 max-w-md w-full">
    <input
      v-model="email"
      type="email"
      placeholder="Enter your corporate email..."
      class="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs focus:ring-2 focus:ring-brand-500"
      required
    />
    <BaseButton type="submit" variant="primary" size="sm" :loading="loading">Subscribe</BaseButton>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useNotificationStore } from '@/stores/notification.store.js'

const email = ref('')
const loading = ref(false)
const notificationStore = useNotificationStore()

async function handleSubmit() {
  if (!email.value) return
  loading.value = true
  try {
    await new Promise(r => setTimeout(r, 400))
    notificationStore.success('Subscribed to Nexora Hardware Dispatch.')
    email.value = ''
  } finally {
    loading.value = false
  }
}
</script>
