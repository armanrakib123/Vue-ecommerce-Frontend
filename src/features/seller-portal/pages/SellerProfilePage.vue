<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Store Settings & Credentials</h1>
      <p class="text-xs text-slate-500">Corporate identity and tax classification</p>
    </div>
    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
      <SellerProfileForm :profile="profile" @save="handleSave" />
    </div>
  </div>
</template>
<script setup>
import SellerProfileForm from '../components/SellerProfileForm.vue'
import { useSellerProfile } from '../composables/useSellerProfile.js'
import { useNotificationStore } from '@/stores/notification.store.js'

const { profile } = useSellerProfile()
const notificationStore = useNotificationStore()

function handleSave() {
  notificationStore.success('Store credentials saved.')
}
</script>
