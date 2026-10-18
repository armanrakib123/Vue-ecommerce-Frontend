<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Merchant & Seller Directory</h1>
        <p class="text-xs text-slate-500">Vendor onboarding, brand compliance, and store verification status</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="inviteSeller">
        + Onboard Merchant
      </BaseButton>
    </div>

    <DataTable :columns="columns" :rows="sellers">
      <template #store="{ row }">
        <div class="flex items-center gap-3">
          <img :src="row.avatar" class="w-9 h-9 rounded-full object-cover" />
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-xs font-bold text-slate-900 dark:text-white">{{ row.storeName }}</span>
              <span v-if="row.verified" class="text-emerald-500 text-xs font-bold" title="Verified Merchant">✓</span>
            </div>
            <p class="text-[11px] text-slate-400">Owner: {{ row.name }} ({{ row.email }})</p>
          </div>
        </div>
      </template>

      <template #productsCount="{ row }">
        <span class="font-bold text-xs">{{ row.productsCount }} items</span>
      </template>

      <template #rating="{ row }">
        <span class="text-xs font-bold text-amber-500">★ {{ row.rating }}</span>
      </template>

      <template #status="{ row }">
        <StatusBadge :status="row.verified ? 'active' : 'pending'" />
      </template>

      <template #actions="{ row }">
        <div class="flex items-center justify-end gap-2">
          <button v-if="!row.verified" class="text-xs font-bold text-emerald-600 hover:underline" @click="verify(row)">
            Verify Store
          </button>
          <RouterLink to="/seller/dashboard" class="text-xs font-bold text-brand-600 hover:underline">
            View Portal
          </RouterLink>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotificationStore } from '@/stores/notification.store.js'
import DataTable from '@/components/data-display/DataTable.vue'
import StatusBadge from '@/components/data-display/StatusBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const notificationStore = useNotificationStore()

const columns = [
  { key: 'store', label: 'Store & Merchant' },
  { key: 'productsCount', label: 'Catalog Size' },
  { key: 'rating', label: 'Merchant Rating' },
  { key: 'status', label: 'Compliance' },
  { key: 'actions', label: 'Control', align: 'right' }
]

const sellers = ref([
  {
    id: 's1',
    name: 'Marcus Vance',
    storeName: 'AuraTech Sound & Gear',
    email: 'marcus.seller@auratech.io',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    verified: true,
    rating: 4.9,
    productsCount: 48,
  },
  {
    id: 's2',
    name: 'Elena Rostova',
    storeName: 'Form & Lumen Official',
    email: 'elena@formandlumen.design',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150',
    verified: true,
    rating: 4.8,
    productsCount: 24,
  },
  {
    id: 's3',
    name: 'Klaus Meyer',
    storeName: 'Nomadics Modular EDC',
    email: 'klaus@nomadics.de',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    verified: false,
    rating: 5.0,
    productsCount: 12,
  }
])

function verify(row) {
  row.verified = true
  notificationStore.success(`Merchant "${row.storeName}" verified & authorized for global marketplace payouts`)
}

function inviteSeller() {
  notificationStore.info('Sent merchant onboarding package to prospective vendor')
}
</script>
