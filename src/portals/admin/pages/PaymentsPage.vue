<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Payment Transactions & Settlements</h1>
        <p class="text-xs text-slate-500">Gateway telemetry, multi-currency processing, and ledger reconciliations</p>
      </div>
      <BaseButton variant="outline" size="sm" @click="syncGateways">
        Sync Gateway Feeds
      </BaseButton>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StatCard title="Processed Today" value="$28,490.00" :change="5.4" description="148 capture events" />
      <StatCard title="Payment Success Rate" value="99.2%" description="Stripe & Adyen webhooks" />
      <StatCard title="Pending Settlements" value="$12,180.00" description="Next payout window: T+2" />
    </div>

    <DataTable :columns="columns" :rows="payments">
      <template #txHash="{ row }">
        <span class="font-mono text-xs text-slate-700 dark:text-slate-300">{{ row.txHash }}</span>
      </template>
      <template #amount="{ row }">
        <span class="font-bold text-xs">{{ formatCurrency(row.amount) }}</span>
      </template>
      <template #status="{ row }">
        <StatusBadge :status="row.status" />
      </template>
      <template #actions="{ row }">
        <button class="text-xs font-bold text-brand-600 hover:underline" @click="inspectTx(row)">
          Inspect Receipt
        </button>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { formatCurrency } from '@/utils/format-currency.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import StatCard from '@/components/data-display/StatCard.vue'
import DataTable from '@/components/data-display/DataTable.vue'
import StatusBadge from '@/components/data-display/StatusBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const notificationStore = useNotificationStore()

const columns = [
  { key: 'txHash', label: 'Transaction Reference' },
  { key: 'gateway', label: 'Gateway' },
  { key: 'customer', label: 'Customer' },
  { key: 'amount', label: 'Captured' },
  { key: 'status', label: 'Payment State' },
  { key: 'actions', label: 'Reconciliation', align: 'right' }
]

const payments = ref([
  { id: '1', txHash: 'ch_3Nf4K8L92A9e1', gateway: 'Stripe Elements', customer: 'Sarah Connor', amount: 587.52, status: 'paid' },
  { id: '2', txHash: 'ch_3Nf4K8L92A9e2', gateway: 'Apple Pay (Direct)', customer: 'David Kim', amount: 499.00, status: 'paid' },
  { id: '3', txHash: 'ch_3Nf4K8L92A9e3', gateway: 'PayPal Express', customer: 'Elena Rostova', amount: 189.00, status: 'paid' },
  { id: '4', txHash: 'ch_3Nf4K8L92A9e4', gateway: 'Stripe 3D-Secure', customer: 'Alex Rivera', amount: 349.00, status: 'paid' }
])

function syncGateways() {
  notificationStore.success('Payment gateway webhooks synced with 0 reconciliation discrepancies')
}

function inspectTx(row) {
  notificationStore.info(`Inspected Gateway Capture: ${row.txHash}`)
}
</script>
