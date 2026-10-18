import { useAuthStore } from '@/stores/auth.store.js'

export const permissionDirective = {
  mounted(el, binding) {
    const authStore = useAuthStore()
    const { value } = binding

    if (!value) return

    const hasAccess = authStore.hasPermission(value)
    if (!hasAccess) {
      el.parentNode?.removeChild(el)
    }
  }
}

export default permissionDirective
