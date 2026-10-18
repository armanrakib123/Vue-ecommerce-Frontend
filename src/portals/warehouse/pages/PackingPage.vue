<template>
  <div class="space-y-6 max-w-4xl">
    <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Packing & Quality Assurance Station</h1>
      <p class="text-xs text-slate-500">Weight verification, eco-cushion packaging, and carrier barcode printing</p>
    </div>

    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <span class="text-xs font-bold text-brand-600 uppercase tracking-wider">Current Parcel</span>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Order #NX-2026-984210</h3>
          <p class="text-xs text-slate-400">Recipient: Sarah Connor • San Francisco, CA</p>
        </div>
        <span class="px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700">Packing in Progress</span>
      </div>

      <div class="space-y-3">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">Required Items in Box</h4>
        <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 flex justify-between items-center text-xs">
          <span>1x Lumina Sound Pro ANC Wireless Headphones (Matte Obsidian)</span>
          <span class="text-emerald-600 font-bold">✓ Weighed (265g)</span>
        </div>
        <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 flex justify-between items-center text-xs">
          <span>1x AeroFlex 28L Weatherproof Commuter Backpack (Slate Grey)</span>
          <span class="text-emerald-600 font-bold">✓ Weighed (1.1kg)</span>
        </div>
      </div>

      <div class="pt-4 flex justify-between items-center border-t border-slate-100 dark:border-slate-800">
        <span class="text-xs text-slate-400">Total Scale Reading: 1.42 kg (Nominal target 1.40 kg ± 0.05)</span>
        <BaseButton variant="primary" size="sm" @click="completePacking">
          🖨 Seal Box & Print FedEx Shipping Label
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNotificationStore } from '@/stores/notification.store.js'
import BaseButton from '@/components/ui/BaseButton.vue'

const notificationStore = useNotificationStore()

function completePacking() {
  notificationStore.success('Parcel sealed, tamper-evident tape verified, and thermal label printed!')
}
</script>
