<template>
  <form @submit.prevent="submit" class="space-y-4">
    <BaseInput
      v-model="email"
      label="Email Address"
      type="email"
      placeholder="sarah.customer@nexora.io"
      :error="errors.email"
      required
    />

    <BaseInput
      v-model="password"
      label="Password"
      type="password"
      placeholder="••••••••"
      :error="errors.password"
      required
    />

    <div class="flex items-center justify-between text-xs">
      <BaseCheckbox v-model="rememberMe" label="Remember me" />
      <RouterLink to="/forgot-password" class="font-bold text-brand-600 hover:underline">
        Forgot password?
      </RouterLink>
    </div>

    <BaseButton type="submit" variant="primary" full-width :loading="isLoading">
      Sign In to Nexora
    </BaseButton>

    <SocialLoginButtons @social-click="handleSocial" />
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useLogin } from '../composables/useLogin.js'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import SocialLoginButtons from './SocialLoginButtons.vue'

const route = useRoute()
const { email, password, errors, isLoading, handleLogin } = useLogin()
const rememberMe = ref(true)

function submit() {
  handleLogin(route.query.redirect)
}

function handleSocial(provider) {
  email.value = 'sarah.customer@nexora.io'
  password.value = 'secret123'
  submit()
}
</script>
