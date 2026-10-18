<template>
  <div class="space-y-6">
    <div class="border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Carrier Handover & Dock Dispatch</h1>
        <p class="text-xs text-slate-500">Pallet consolidation, bill of lading generation, and courier driver dispatch sign-off</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="dispatchPallet">
        Sign Driver Manifest & Dispatch Truck
      </BaseButton>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="dock in docks"
        :key="dock.carrier"
        class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4"
      >
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-brand-600 uppercase tracking-wider">{{ dock.dockId }}</span>
          <StatusBadge :status="dock.status" />
        </div>

        <div>
          <h3 class="text-base font-bold text-slate-900 dark:text-white">{{ dock.carrier }}</h3>
          <p class="text-xs text-slate-500 mt-1">Pickup Scheduled: {{ dock.time }}</p>
        </div>

        <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 text-xs space-y-1">
          <p><span class="text-slate-400">Total Packages:</span> <span class="font-bold">{{ dock.packages }} parcels</span></p>
          <p><span class="text-slate-400">Total Weight:</span> {{ dock.weight }}</p>
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

const docks = ref([
  { dockId: 'Bay 01', carrier: 'FedEx Express Ground & Air', time: '17:00 PST (Docked)', packages: 54, weight: '78.5 kg', status: 'processing' },
  { dockId: 'Bay 02', carrier: 'DHL Priority Worldwide Express', time: '18:30 PST', packages: 28, weight: '42.1 kg', status: 'pending' },
  { dockId: 'Bay 03', carrier: 'UPS Commercial Freight', time: '16:00 PST', packages: 12, weight: '124.0 kg', status: 'shipped' }
])

function dispatchPallet() {
  notificationStore.success('Carrier handover signature captured! 54 parcels transferred to FedEx logistics network.')
}
</script>
