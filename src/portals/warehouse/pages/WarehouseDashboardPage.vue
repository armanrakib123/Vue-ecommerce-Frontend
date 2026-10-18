<template>
  <div class="space-y-8">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">
          San Francisco Central Hub (SF-01) Operations
        </h1>
        <p class="text-xs text-slate-500">Automated picking waves, RF scanner queue, and freight dispatch</p>
      </div>

      <div class="flex items-center gap-3">
        <RouterLink to="/warehouse/picking" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-sm transition">
          🚀 Open Wave Picking Queue
        </RouterLink>
      </div>
    </div>

    <!-- Warehouse KPIs -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard title="Wave Picks Pending" value="14" description="Prioritized by carrier cutoff" />
      <StatCard title="Packing Stations Busy" value="6 / 8" description="Active packers on duty" />
      <StatCard title="Parcels for FedEx Pickup" value="84" description="Handover window: 17:00 PST" />
      <StatCard title="Pick Accuracy Rate" value="99.94%" description="Laser barcode verified" />
    </div>

    <!-- Live Picking Wave Table -->
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-4">
      <div class="flex items-center justify-between">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white">Active Dispatch Waves</h3>
        <RouterLink to="/warehouse/picking" class="text-xs font-bold text-emerald-600 hover:underline">
          Manage Picking →
        </RouterLink>
      </div>

      <BaseTable :columns="columns" :rows="waves">
        <template #waveId="{ row }">
          <span class="font-mono font-bold text-xs">{{ row.waveId }}</span>
        </template>
        <template #status="{ row }">
          <StatusBadge :status="row.status" />
        </template>
        <template #actions="{ row }">
          <RouterLink to="/warehouse/packing" class="text-xs font-bold text-emerald-600 hover:underline">
            Station Handover →
          </RouterLink>
        </template>
      </BaseTable>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StatCard from '@/components/data-display/StatCard.vue'
import BaseTable from '@/components/ui/BaseTable.vue'
import StatusBadge from '@/components/data-display/StatusBadge.vue'

const columns = [
  { key: 'waveId', label: 'Wave Number' },
  { key: 'zone', label: 'Warehouse Zone' },
  { key: 'itemCount', label: 'Total Items' },
  { key: 'carrier', label: 'Cutoff Carrier' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: 'Routing', align: 'right' }
]

const waves = ref([
  { waveId: 'WAVE-2026-881', zone: 'Zone A (Acoustic Audio)', itemCount: '42 items', carrier: 'FedEx Express (17:00)', status: 'processing' },
  { waveId: 'WAVE-2026-882', zone: 'Zone C (Titanium Vault)', itemCount: '18 items', carrier: 'DHL Priority (18:30)', status: 'picked' },
  { waveId: 'WAVE-2026-883', zone: 'Zone B (EDC & Apparel)', itemCount: '64 items', carrier: 'USPS Priority (16:00)', status: 'packed' }
])
</script>
