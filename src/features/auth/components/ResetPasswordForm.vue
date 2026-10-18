<template>
  <form @submit.prevent="submit" class="space-y-4">
    <BaseInput v-model="password" label="New Password" type="password" placeholder="••••••••" required />
    <BaseInput v-model="confirmPassword" label="Confirm New Password" type="password" placeholder="••••••••" required />
    <BaseButton type="submit" variant="primary" full-width>Set New Password</BaseButton>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useNotificationStore } from '@/stores/notification.store.js'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const router = useRouter()
const notificationStore = useNotificationStore()
const password = ref('')
const confirmPassword = ref('')

function submit() {
  notificationStore.success('Password updated successfully! Please sign in.')
  router.push('/login')
}
</script>
