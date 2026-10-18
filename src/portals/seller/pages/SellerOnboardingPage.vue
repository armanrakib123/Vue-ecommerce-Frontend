<template>
  <div class="max-w-2xl mx-auto py-12 px-4 space-y-6">
    <div class="text-center">
      <span class="text-xs font-bold uppercase tracking-widest text-brand-600">Merchant Activation</span>
      <h1 class="text-3xl font-black text-slate-900 dark:text-white font-display mt-1">
        Welcome to the Nexora Merchant Network
      </h1>
      <p class="text-xs text-slate-500 mt-2">Complete your corporate entity details to activate automatic daily payouts</p>
    </div>

    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
      <BaseInput v-model="form.businessName" label="Legal Business Name" placeholder="AuraTech Acoustics LLC" required />
      <BaseInput v-model="form.taxId" label="Tax Identification (EIN / VAT)" placeholder="XX-XXXXXXX" required />
      <BaseInput v-model="form.iban" label="Bank Routing / IBAN" placeholder="US89 XXXX XXXX XXXX" required />

      <div class="pt-4">
        <BaseButton variant="primary" full-width @click="completeOnboarding">
          Complete Onboarding & Launch Dashboard →
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const router = useRouter()
const authStore = useAuthStore()
const notificationStore = useNotificationStore()

const form = ref({
  businessName: 'AuraTech Acoustics LLC',
  taxId: '12-3456789',
  iban: 'US89 1234 5678 9012 3456'
})

function completeOnboarding() {
  if (authStore.user) {
    authStore.user.needsOnboarding = false
  }
  notificationStore.success('Corporate identity verified! Your merchant storefront is now fully active.')
  router.push('/seller/dashboard')
}
</script>
