import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import { validateLogin } from '../schemas/login.schema.js'

export function useLogin() {
  const authStore = useAuthStore()
  const notificationStore = useNotificationStore()
  const router = useRouter()

  const email = ref('')
  const password = ref('')
  const errors = ref({})
  const isLoading = ref(false)

  async function handleLogin(redirectPath = null) {
    errors.value = {}
    const validation = validateLogin({ email: email.value, password: password.value })
    if (!validation.success) {
      validation.error.issues.forEach(err => {
        errors.value[err.path[0]] = err.message
      })
      return false
    }

    isLoading.value = true
    try {
      const user = await authStore.login(email.value, password.value)
      notificationStore.success(`Welcome back, ${user.name}!`)
      const target = redirectPath || authStore.getDefaultPortalRoute()
      router.push(target)
      return true
    } catch (err) {
      notificationStore.error(err.message || 'Invalid email or password')
      return false
    } finally {
      isLoading.value = false
    }
  }

  return {
    email,
    password,
    errors,
    isLoading,
    handleLogin,
  }
}
