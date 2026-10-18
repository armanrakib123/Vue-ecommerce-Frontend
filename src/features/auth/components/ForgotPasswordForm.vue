<template>
  <form @submit.prevent="sendResetLink" class="space-y-4">
    <p class="text-xs text-slate-500">Enter your email address and we will dispatch a secure 6-digit recovery code.</p>
    <BaseInput v-model="email" label="Account Email" type="email" placeholder="sarah@example.com" required />
    <BaseButton type="submit" variant="primary" full-width :loading="isLoading">
      Send Reset Link
    </BaseButton>
  </form>
</template>

<script setup>
import { usePasswordReset } from '../composables/usePasswordReset.js'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const { email, isLoading, sendResetLink } = usePasswordReset()
</script>
