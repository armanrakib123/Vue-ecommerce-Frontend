<template>
  <div class="max-w-4xl mx-auto px-4 py-16 space-y-8">
    <div class="text-center space-y-2">
      <h1 class="text-3xl font-black text-slate-900 dark:text-white font-display">Contact Nexora Headquarters</h1>
      <p class="text-xs text-slate-500">Global sales, enterprise bulk ordering, and press inquiries</p>
    </div>

    <div class="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-6 max-w-xl mx-auto">
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <BaseInput v-model="form.name" label="Your Name" required />
        <BaseInput v-model="form.email" label="Corporate Email" type="email" required />
        <div>
          <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Message</label>
          <textarea v-model="form.message" rows="4" class="w-full px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs focus:ring-2 focus:ring-brand-500" required></textarea>
        </div>
        <BaseButton type="submit" variant="primary" size="sm" :loading="loading">Send Dispatch</BaseButton>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useNotificationStore } from '@/stores/notification.store.js'

const form = ref({ name: '', email: '', message: '' })
const loading = ref(false)
const notificationStore = useNotificationStore()

async function handleSubmit() {
  loading.value = true
  await new Promise(r => setTimeout(r, 400))
  loading.value = false
  notificationStore.success('Message sent! Our team will respond within 4 business hours.')
  form.value = { name: '', email: '', message: '' }
}
</script>
