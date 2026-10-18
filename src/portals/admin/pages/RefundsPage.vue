<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Refund Authorization Queue</h1>
        <p class="text-xs text-slate-500">Finance operator claims, RMA verifications, and reverse logistics balances</p>
      </div>
    </div>

    <DataTable :columns="columns" :rows="refunds">
      <template #rma="{ row }">
        <div>
          <span class="font-mono font-bold text-xs">{{ row.rma }}</span>
          <p class="text-[10px] text-slate-400">Order: {{ row.orderNumber }}</p>
        </div>
      </template>

      <template #amount="{ row }">
        <span class="font-bold text-xs text-rose-600 dark:text-rose-400">-{{ formatCurrency(row.amount) }}</span>
      </template>

      <template #status="{ row }">
        <StatusBadge :status="row.status" />
      </template>

      <template #actions="{ row }">
        <div v-if="row.status === 'pending'" class="flex items-center justify-end gap-2">
          <button class="text-xs font-bold text-emerald-600 hover:underline" @click="approveRefund(row)">
            Approve & Credit
          </button>
          <button class="text-xs font-bold text-rose-500 hover:underline" @click="rejectRefund(row)">
            Reject
          </button>
        </div>
        <span v-else class="text-xs text-slate-400 font-semibold">Processed</span>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { formatCurrency } from '@/utils/format-currency.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import DataTable from '@/components/data-display/DataTable.vue'
import StatusBadge from '@/components/data-display/StatusBadge.vue'

const notificationStore = useNotificationStore()

const columns = [
  { key: 'rma', label: 'RMA & Order Ref' },
  { key: 'customer', label: 'Claimant' },
  { key: 'reason', label: 'Claim Reason' },
  { key: 'amount', label: 'Refund Value' },
  { key: 'status', label: 'Review Status' },
  { key: 'actions', label: 'Decision', align: 'right' }
]

const refunds = ref([
  { id: '1', rma: 'RMA-2026-091', orderNumber: 'NX-2026-984210', customer: 'Sarah Connor', reason: 'Customer requested 32L exchange', amount: 220.00, status: 'pending' },
  { id: '2', rma: 'RMA-2026-088', orderNumber: 'NX-2026-971204', customer: 'Liam Neeson', reason: 'Duplicate order initiated', amount: 349.00, status: 'refunded' }
])

function approveRefund(row) {
  row.status = 'refunded'
  notificationStore.success(`Authorized refund ${formatCurrency(row.amount)} to ${row.customer}`)
}

function rejectRefund(row) {
  row.status = 'cancelled'
  notificationStore.info(`Rejected RMA claim ${row.rma}`)
}
</script>
