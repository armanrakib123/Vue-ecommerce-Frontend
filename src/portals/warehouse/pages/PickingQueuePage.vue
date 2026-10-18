<template>
  <div class="space-y-6">
    <div class="border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Wave Picking Station</h1>
        <p class="text-xs text-slate-500">Optimized shortest-path pick list for San Francisco Hub</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="completeAllPicks">
        Complete Wave Pick
      </BaseButton>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="item in pickItems"
        :key="item.id"
        :class="[
          'p-6 rounded-3xl border transition shadow-sm space-y-4',
          item.picked
            ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50'
            : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800'
        ]"
      >
        <div class="flex items-center justify-between">
          <span class="px-2.5 py-1 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-600 font-mono font-bold text-xs">
            Bin: {{ item.bin }}
          </span>
          <span v-if="item.picked" class="text-xs font-bold text-emerald-600">✓ Picked</span>
          <span v-else class="text-xs font-bold text-amber-500">Pending Pick</span>
        </div>

        <div>
          <h4 class="text-sm font-bold text-slate-900 dark:text-white">{{ item.name }}</h4>
          <p class="text-xs text-slate-400 font-mono mt-0.5">{{ item.sku }} • Qty: {{ item.qty }} pcs</p>
        </div>

        <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <span class="text-[11px] text-slate-400">Order: {{ item.orderId }}</span>
          <BaseButton
            :variant="item.picked ? 'secondary' : 'primary'"
            size="xs"
            @click="togglePick(item)"
          >
            {{ item.picked ? 'Undo' : 'Verify & Pick' }}
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotificationStore } from '@/stores/notification.store.js'
import BaseButton from '@/components/ui/BaseButton.vue'

const notificationStore = useNotificationStore()

const pickItems = ref([
  { id: '1', bin: 'Aisle 4 - B2', name: 'Lumina Sound Pro ANC Headphones', sku: 'LUM-ANC-01', qty: 1, orderId: 'NX-2026-984210', picked: true },
  { id: '2', bin: 'Aisle 8 - C4', name: 'AeroFlex 28L Weatherproof Backpack', sku: 'AERO-28-04', qty: 1, orderId: 'NX-2026-984210', picked: false },
  { id: '3', bin: 'Vault - D1', name: 'Chronos Vanguard Titanium Smartwatch', sku: 'CHR-VAN-02', qty: 1, orderId: 'NX-2026-984211', picked: false },
])

function togglePick(item) {
  item.picked = !item.picked
  if (item.picked) {
    notificationStore.success(`Verified barcode scan for ${item.sku}. Item placed in dispatch cart.`)
  }
}

function completeAllPicks() {
  pickItems.value.forEach(i => i.picked = true)
  notificationStore.success('Wave pick completed! Routing dispatch cart to Packing Station #02.')
}
</script>
