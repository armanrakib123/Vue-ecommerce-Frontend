<template>
  <div class="space-y-8">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Support Desk Operations</h1>
        <p class="text-xs text-slate-500">Live omni-channel queue, customer issue triage, and order modifications</p>
      </div>

      <div class="flex items-center gap-3">
        <RouterLink to="/support/lookup" class="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold text-xs shadow-sm transition">
          🔍 Customer / Order Lookup
        </RouterLink>
      </div>
    </div>

    <!-- Support KPIs -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard title="Active Queue" value="18" description="4 urgent escalations" />
      <StatCard title="Avg First Response" value="7.4 mins" :change="-12.1" description="SLA target &lt; 15 mins" />
      <StatCard title="Resolved Today" value="42" :change="14.0" description="Agent productivity score" />
      <StatCard title="CSAT Rating" value="98.4%" description="Based on post-ticket feedback" />
    </div>

    <!-- Priority Ticket Queue -->
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-4">
      <div class="flex items-center justify-between">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white">Active Support Queue</h3>
        <RouterLink to="/support/tickets" class="text-xs font-bold text-sky-600 hover:underline">
          View All Tickets →
        </RouterLink>
      </div>

      <BaseTable :columns="columns" :rows="tickets">
        <template #ticket="{ row }">
          <div>
            <span class="font-mono font-bold text-xs">{{ row.ticketNumber }}</span>
            <p class="text-xs font-bold text-slate-900 dark:text-white truncate">{{ row.subject }}</p>
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
            Open Desk Workspace →
          </RouterLink>
        </template>
      </BaseTable>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mockTickets } from '@/mocks/fixtures/tickets.json.js'
import StatCard from '@/components/data-display/StatCard.vue'
import BaseTable from '@/components/ui/BaseTable.vue'
import StatusBadge from '@/components/data-display/StatusBadge.vue'

const tickets = ref(mockTickets)

const columns = [
  { key: 'ticket', label: 'Ticket & Topic' },
  { key: 'category', label: 'Category' },
  { key: 'priority', label: 'Priority' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: 'Action', align: 'right' }
]
</script>
