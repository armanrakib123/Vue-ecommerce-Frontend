<template>
  <form @submit.prevent="submit" class="space-y-4">
    <BaseInput v-model="fullName" label="Full Name" placeholder="Sarah Connor" required />
    <BaseInput v-model="email" label="Email Address" type="email" placeholder="sarah@example.com" required />
    <BaseInput v-model="password" label="Create Password" type="password" placeholder="••••••••" required />
    <PasswordStrength :password="password" />

    <BaseCheckbox v-model="agreeTerms">
      <span class="text-xs text-slate-500">I agree to the <a href="#" class="text-brand-600 underline">Terms</a> & <a href="#" class="text-brand-600 underline">Privacy Policy</a></span>
    </BaseCheckbox>

    <BaseButton type="submit" variant="primary" full-width :loading="isLoading">
      Create Account
    </BaseButton>

    <SocialLoginButtons />
  </form>
</template>

<script setup>
import { useRegister } from '../composables/useRegister.js'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import PasswordStrength from './PasswordStrength.vue'
import SocialLoginButtons from './SocialLoginButtons.vue'

const { fullName, email, password, agreeTerms, isLoading, handleRegister } = useRegister()

function submit() {
  handleRegister()
}
</script>
