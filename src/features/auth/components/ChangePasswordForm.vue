<template>
  <form @submit.prevent="update" class="space-y-3">
    <BaseInput v-model="current" label="Current Password" type="password" required />
    <BaseInput v-model="newPass" label="New Password" type="password" required />
    <BaseButton type="submit" variant="primary" size="sm">Update Password</BaseButton>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useNotificationStore } from '@/stores/notification.store.js'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const notificationStore = useNotificationStore()
const current = ref('')
const newPass = ref('')

function update() {
  notificationStore.success('Account password updated.')
  current.value = ''
  newPass.value = ''
}
</script>
