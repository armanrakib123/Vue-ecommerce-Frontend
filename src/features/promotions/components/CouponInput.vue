<template>
  <div class="flex gap-2">
    <input
      v-model="code"
      type="text"
      placeholder="PROMO CODE"
      class="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs uppercase font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-brand-500"
    />
    <BaseButton size="sm" variant="primary" :loading="loading" @click="handleApply">Apply</BaseButton>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useCartStore } from '@/stores/cart.store.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import { promotionsApi } from '../api/promotions.api.js'

const code = ref('')
const loading = ref(false)
const cartStore = useCartStore()
const notificationStore = useNotificationStore()

async function handleApply() {
  if (!code.value.trim()) return
  loading.value = true
  try {
    const res = await promotionsApi.validateCoupon(code.value.trim())
    cartStore.applyCoupon(res.data)
    notificationStore.success(`Coupon ${code.value} applied successfully!`)
    code.value = ''
  } catch (err) {
    notificationStore.error(err.message || 'Invalid promotion code')
  } finally {
    loading.value = false
  }
}
</script>
