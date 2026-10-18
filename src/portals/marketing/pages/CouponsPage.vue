<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Promo Codes & Referral Program</h1>
        <p class="text-xs text-slate-500">Affiliate links, discount vouchers, and influencer commission tracking</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="createVoucher">
        + Create Promo Code
      </BaseButton>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="c in coupons" :key="c.code" class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <span class="font-mono text-sm font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-lg">{{ c.code }}</span>
          <StatusBadge :status="c.isActive ? 'active' : 'cancelled'" />
        </div>
        <p class="text-xs font-bold text-slate-900 dark:text-white">{{ c.description }}</p>
        <p class="text-[11px] text-slate-400">Min Order: ${{ c.minOrderValue }} • Redemptions: 842 uses</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mockCoupons } from '@/mocks/fixtures/coupons.json.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import StatusBadge from '@/components/data-display/StatusBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const notificationStore = useNotificationStore()
const coupons = ref([...mockCoupons])

function createVoucher() {
  notificationStore.info('Referral voucher creator opened')
}
</script>
