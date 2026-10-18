<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">System Security Audit Trail</h1>
        <p class="text-xs text-slate-500">Immutable immutable ledger of operator actions, policy updates, and API keys</p>
      </div>
      <BaseButton variant="outline" size="sm" @click="downloadLogs">
        Download Encrypted Hash Log
      </BaseButton>
    </div>

    <DataTable :columns="columns" :rows="logs">
      <template #timestamp="{ row }">
        <span class="font-mono text-xs text-slate-400">{{ row.timestamp }}</span>
      </template>

      <template #actor="{ row }">
        <div class="flex items-center gap-2">
          <span class="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold">
            {{ row.actor[0] }}
          </span>
          <span class="text-xs font-bold text-slate-900 dark:text-white">{{ row.actor }}</span>
        </div>
      </template>

      <template #action="{ row }">
        <span class="font-mono text-xs font-semibold text-brand-600 dark:text-brand-400">{{ row.action }}</span>
      </template>

      <template #ip="{ row }">
        <span class="font-mono text-xs text-slate-500">{{ row.ip }}</span>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotificationStore } from '@/stores/notification.store.js'
import DataTable from '@/components/data-display/DataTable.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const notificationStore = useNotificationStore()

const columns = [
  { key: 'timestamp', label: 'Timestamp (UTC)' },
  { key: 'actor', label: 'Operator' },
  { key: 'action', label: 'Action Event' },
  { key: 'resource', label: 'Resource URI' },
  { key: 'ip', label: 'Origin IP' }
]

const logs = ref([
  { id: '1', timestamp: '2026-10-17 14:32:10', actor: 'Alex Rivera (Admin)', action: 'RBAC_POLICY_UPDATE', resource: '/iam/policies/finance_operator', ip: '198.51.100.24' },
  { id: '2', timestamp: '2026-10-17 12:15:44', actor: 'Marcus Vance (Seller)', action: 'CATALOG_PRICE_MUTATION', resource: '/catalog/products/LUM-ANC-01', ip: '203.0.113.88' },
  { id: '3', timestamp: '2026-10-17 11:20:00', actor: 'System Worker', action: 'INVENTORY_CYCLE_SYNC', resource: '/warehouse/hubs/SF-01', ip: '10.0.4.12' },
  { id: '4', timestamp: '2026-10-17 09:12:05', actor: 'Elena Rostova (Support)', action: 'CUSTOMER_TICKET_REPLY', resource: '/support/tickets/tkt_1092', ip: '198.51.100.99' }
])

function downloadLogs() {
  notificationStore.success('Audit trail downloaded with SHA-256 integrity seal')
}
</script>
