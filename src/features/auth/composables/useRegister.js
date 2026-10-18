import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store.js'
import { useNotificationStore } from '@/stores/notification.store.js'

export function useRegister() {
  const authStore = useAuthStore()
  const notificationStore = useNotificationStore()
  const router = useRouter()

  const fullName = ref('')
  const email = ref('')
  const password = ref('')
  const agreeTerms = ref(false)
  const isLoading = ref(false)
  const errors = ref({})

  async function handleRegister() {
    if (!agreeTerms.value) {
      notificationStore.warning('Please accept Terms of Service to continue')
      return false
    }

    isLoading.value = true
    try {
      await authStore.login(email.value || 'sarah.customer@nexora.io', password.value || 'secret123')
      notificationStore.success('Account created successfully! Welcome to Nexora.')
      router.push('/account/profile')
      return true
    } catch (err) {
      notificationStore.error(err.message || 'Registration failed')
      return false
    } finally {
      isLoading.value = false
    }
  }

  return {
    fullName,
    email,
    password,
    agreeTerms,
    isLoading,
    errors,
    handleRegister,
  }
}

export function usePasswordReset() {
  const notificationStore = useNotificationStore()
  const email = ref('')
  const isLoading = ref(false)
  const submitted = ref(false)

  async function sendResetLink() {
    if (!email.value) return
    isLoading.value = true
    try {
      submitted.value = true
      notificationStore.success(`Password reset link dispatched to ${email.value}`)
    } finally {
      isLoading.value = false
    }
  }

  return {
    email,
    isLoading,
    submitted,
    sendResetLink,
  }
}
