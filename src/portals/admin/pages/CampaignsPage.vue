<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Promotional Campaigns</h1>
        <p class="text-xs text-slate-500">Multi-channel seasonal sales, hero takeovers, and email pushes</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="newCampaign">
        + Launch Campaign
      </BaseButton>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="camp in campaigns"
        :key="camp.id"
        class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4"
      >
        <div class="flex items-center justify-between">
          <StatusBadge :status="camp.status" />
          <span class="text-xs font-semibold text-slate-400">{{ camp.period }}</span>
        </div>

        <div>
          <h3 class="text-base font-bold text-slate-900 dark:text-white">{{ camp.title }}</h3>
          <p class="text-xs text-slate-500 mt-1">{{ camp.description }}</p>
        </div>

        <div class="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-center">
          <div>
            <span class="text-[10px] text-slate-400 uppercase font-bold">Impressions</span>
            <p class="text-xs font-extrabold text-slate-800 dark:text-slate-200">{{ camp.impressions }}</p>
          </div>
          <div>
            <span class="text-[10px] text-slate-400 uppercase font-bold">Clicks</span>
            <p class="text-xs font-extrabold text-slate-800 dark:text-slate-200">{{ camp.clicks }}</p>
          </div>
          <div>
            <span class="text-[10px] text-slate-400 uppercase font-bold">Conv. Rate</span>
            <p class="text-xs font-extrabold text-emerald-600">{{ camp.conversion }}</p>
          </div>
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
  {
    id: 'c1',
    title: 'Autumn 2026 Innovation Drop',
    description: 'Hero homepage feature showcasing Titanium and Acoustic hardware series.',
    status: 'active',
    period: 'Oct 15 - Nov 15',
    impressions: '142.5K',
    clicks: '18.4K',
    conversion: '4.2%'
  },
  {
    id: 'c2',
    title: 'Audiophile LDAC Headphone Promotion',
    description: 'Targeted campaign featuring Lumina Pro Wireless with code NEXORA20.',
    status: 'active',
    period: 'Oct 01 - Oct 31',
    impressions: '89.2K',
    clicks: '11.8K',
    conversion: '5.8%'
  },
  {
    id: 'c3',
    title: 'Cyber Week Prep Campaign',
    description: 'Early VIP reservations for upcoming Titanium Vanguard drop.',
    status: 'pending',
    period: 'Nov 20 - Dec 01',
    impressions: '12.0K',
    clicks: '1.4K',
    conversion: '2.9%'
  }
])

function newCampaign() {
  notificationStore.info('Campaign creator opened. Ready to schedule push notification and hero banner.')
}
</script>
