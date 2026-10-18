<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Tickets Ingestion Queue</h1>
        <p class="text-xs text-slate-500">Omni-channel email, web form, and live chat inquiries</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="createNewTicket">
        + Create Internal Ticket
      </BaseButton>
    </div>

    <DataTable :columns="columns" :rows="tickets">
      <template #ticket="{ row }">
        <div>
          <span class="font-mono font-bold text-xs">{{ row.ticketNumber }}</span>
          <p class="text-xs font-bold text-slate-900 dark:text-white">{{ row.subject }}</p>
        </div>
      </template>

      <template #customer="{ row }">
        <div>
          <p class="text-xs font-bold">{{ row.customer?.name }}</p>
          <p class="text-[11px] text-slate-400">{{ row.customer?.email }}</p>
        </div>
      </template>

      <template #priority="{ row }">
        <span :class="['text-xs font-bold px-2 py-0.5 rounded-full', row.priority === 'High' ? 'bg-rose-50 text-rose-700' : 'bg-slate-100 text-slate-700']">
          {{ row.priority }}
        </span>
      </template>

      <template #status="{ row }">
        <StatusBadge :status="row.status" />
      </template>

      <template #actions="{ row }">
        <RouterLink :to="`/support/tickets/${row.id}`" class="text-xs font-bold text-sky-600 hover:underline">
          View Thread →
        </RouterLink>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mockTickets } from '@/mocks/fixtures/tickets.json.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import DataTable from '@/components/data-display/DataTable.vue'
import StatusBadge from '@/components/data-display/StatusBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const notificationStore = useNotificationStore()
const tickets = ref([...mockTickets])

const columns = [
  { key: 'ticket', label: 'Ticket / Subject' },
  { key: 'customer', label: 'Customer' },
  { key: 'category', label: 'Inquiry Category' },
  { key: 'priority', label: 'Priority' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: 'Thread', align: 'right' }
]

function createNewTicket() {
  notificationStore.info('Internal ticket creator initialized')
}
</script>
