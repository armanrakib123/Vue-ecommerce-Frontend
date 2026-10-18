<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Merchant Payouts & Escrow</h1>
        <p class="text-xs text-slate-500">Scheduled ACH / Wire disbursements and platform fee reconciliations</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="requestInstantPayout">
        Request On-Demand Payout
      </BaseButton>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StatCard title="Available Balance" value="$14,280.00" description="Cleared for immediate wire transfer" />
      <StatCard title="In Escrow Hold" value="$3,150.00" description="Pending 7-day return grace period" />
      <StatCard title="Total Paid (All Time)" value="$384,910.00" description="68 successful settlement batches" />
    </div>

    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-4">
      <h3 class="text-sm font-bold text-slate-900 dark:text-white">Recent Payout Disbursements</h3>
      <BaseTable :columns="columns" :rows="payouts">
        <template #amount="{ row }">
          <span class="font-bold text-xs text-emerald-600">{{ formatCurrency(row.amount) }}</span>
        </template>
        <template #status="{ row }">
          <StatusBadge :status="row.status" />
        </template>
      </BaseTable>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { formatCurrency } from '@/utils/format-currency.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import StatCard from '@/components/data-display/StatCard.vue'
import BaseTable from '@/components/ui/BaseTable.vue'
import StatusBadge from '@/components/data-display/StatusBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const notificationStore = useNotificationStore()

const columns = [
  { key: 'batchId', label: 'Payout Batch ID' },
  { key: 'date', label: 'Transfer Date' },
  { key: 'bank', label: 'Destination Account' },
  { key: 'amount', label: 'Disbursed Net' },
  { key: 'status', label: 'Status' }
]

const payouts = ref([
  { batchId: 'PO-2026-101', date: '2026-10-15', bank: 'Silicon Valley Bank (•••• 9012)', amount: 12450.00, status: 'paid' },
  { batchId: 'PO-2026-098', date: '2026-10-01', bank: 'Silicon Valley Bank (•••• 9012)', amount: 15890.00, status: 'paid' },
  { batchId: 'PO-2026-094', date: '2026-09-15', bank: 'Silicon Valley Bank (•••• 9012)', amount: 9840.00, status: 'paid' }
])

function requestInstantPayout() {
  notificationStore.success('Initiated fast ACH wire payout of $14,280.00! Funds will settle within 2 hours.')
}
</script>
