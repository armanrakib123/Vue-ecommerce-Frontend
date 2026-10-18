<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Marketing Growth Campaigns</h1>
        <p class="text-xs text-slate-500">Multi-channel seasonal sales, email blasts, and acquisition funnels</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="launchCampaign">
        + Create New Campaign
      </BaseButton>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="camp in campaigns"
        :key="camp.id"
        class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3"
      >
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-brand-600 uppercase">{{ camp.type }}</span>
          <StatusBadge :status="camp.status" />
        </div>
        <h3 class="text-base font-bold text-slate-900 dark:text-white">{{ camp.title }}</h3>
        <p class="text-xs text-slate-500">{{ camp.desc }}</p>
        <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between text-xs">
          <span>ROAS: <b class="text-emerald-600">{{ camp.roas }}</b></span>
          <span>Budget: <b>{{ camp.budget }}</b></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotificationStore } from '@/stores/notification.store.js'
import StatusBadge from '@/components/data-display/StatusBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const notificationStore = useNotificationStore()

const campaigns = ref([
  { id: '1', title: 'Audiophile LDAC Launch', desc: 'Direct response paid social push for Lumina Pro ANC', type: 'Meta Ads', roas: '4.8x', budget: '$15,000', status: 'active' },
  { id: '2', title: 'Holiday Early Access VIP', desc: 'Email sequence sent to Platinum members with 20% coupon', type: 'Klaviyo Email', roas: '8.2x', budget: '$2,500', status: 'active' },
  { id: '3', title: 'Black Friday Teaser Waitlist', desc: 'Landing page lead capture with early reservation rewards', type: 'Organic / PR', roas: '12.0x', budget: '$4,000', status: 'processing' }
])

function launchCampaign() {
  notificationStore.info('Marketing campaign wizard opened')
}
</script>
