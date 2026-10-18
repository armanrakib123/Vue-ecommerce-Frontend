<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Support Desk Escalations</h1>
        <p class="text-xs text-slate-500">Live ticket queue, SLA response compliance, and customer dispute resolution</p>
      </div>
      <RouterLink to="/support/dashboard" class="text-xs font-bold text-brand-600 hover:underline">
        Launch Full Support Agent Desk →
      </RouterLink>
    </div>

    <DataTable :columns="columns" :rows="tickets">
      <template #ticket="{ row }">
        <div>
          <span class="font-mono font-bold text-xs">{{ row.ticketNumber }}</span>
          <p class="text-xs font-bold text-slate-900 dark:text-white truncate">{{ row.subject }}</p>
        </div>
      </template>

      <template #customer="{ row }">
        <p class="text-xs font-bold">{{ row.customer?.name }}</p>
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
        <RouterLink :to="`/support/tickets/${row.id}`" class="text-xs font-bold text-brand-600 hover:underline">
          Reply / Resolve →
        </RouterLink>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mockTickets } from '@/mocks/fixtures/tickets.json.js'
import DataTable from '@/components/data-display/DataTable.vue'
import StatusBadge from '@/components/data-display/StatusBadge.vue'

const tickets = ref([...mockTickets])

const columns = [
  { key: 'ticket', label: 'Ticket & Subject' },
  { key: 'category', label: 'Category' },
  { key: 'customer', label: 'Requester' },
  { key: 'priority', label: 'Priority' },
  { key: 'status', label: 'State' },
  { key: 'actions', label: 'Action', align: 'right' }
]
</script>
