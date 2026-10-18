<template>
  <div class="py-12 px-4">
    <SellerOnboardingForm @complete="handleComplete" />
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import SellerOnboardingForm from '../components/SellerOnboardingForm.vue'
import { useNotificationStore } from '@/stores/notification.store.js'

const router = useRouter()
const notificationStore = useNotificationStore()

function handleComplete() {
  notificationStore.success('Merchant profile submitted for fast-track verification!')
  router.push('/seller/dashboard')
}
</script>
