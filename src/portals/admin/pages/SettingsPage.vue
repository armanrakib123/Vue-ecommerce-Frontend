<template>
  <div class="space-y-6 max-w-4xl">
    <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">System Configuration & Flags</h1>
      <p class="text-xs text-slate-500">Configure global parameters, runtime feature flags, and multi-tenant defaults</p>
    </div>

    <!-- General Settings -->
    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
      <h3 class="text-sm font-bold text-slate-900 dark:text-white">Platform Identity</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <BaseInput v-model="settings.storeName" label="Marketplace Brand Name" />
        <BaseInput v-model="settings.supportEmail" label="Support Inquiries Email" />
        <BaseSelect
          v-model="settings.defaultCurrency"
          label="Base Operating Currency"
          :options="['USD', 'EUR', 'BDT']"
        />
        <BaseSelect
          v-model="settings.defaultLocale"
          label="Default System Language"
          :options="[{ label: 'English (US)', value: 'en' }, { label: 'Bengali (বাংলা)', value: 'bn' }]"
        />
      </div>
    </div>

    <!-- Feature Flags Matrix -->
    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
      <h3 class="text-sm font-bold text-slate-900 dark:text-white">Runtime Feature Flags</h3>
      <div class="space-y-3">
        <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40">
          <div>
            <p class="text-xs font-bold text-slate-900 dark:text-white">Community Product Reviews</p>
            <p class="text-[11px] text-slate-400">Allow verified buyers to submit ratings & photos</p>
          </div>
          <input type="checkbox" v-model="flags.reviews" class="w-4 h-4 text-brand-600 rounded" />
        </div>

        <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40">
          <div>
            <p class="text-xs font-bold text-slate-900 dark:text-white">Customer VIP Loyalty Tier Engine</p>
            <p class="text-[11px] text-slate-400">Award points per dollar spent and redeem vouchers</p>
          </div>
          <input type="checkbox" v-model="flags.loyalty" class="w-4 h-4 text-brand-600 rounded" />
        </div>

        <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40">
          <div>
            <p class="text-xs font-bold text-slate-900 dark:text-white">Realtime Agent Live Chat</p>
            <p class="text-[11px] text-slate-400">WebSocket socket integration for instant messaging</p>
          </div>
          <input type="checkbox" v-model="flags.liveChat" class="w-4 h-4 text-brand-600 rounded" />
        </div>
      </div>

      <div class="pt-4 flex justify-end">
        <BaseButton variant="primary" size="sm" @click="saveSettings">
          Save Configuration
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { appConfig } from '@/config/app.config.js'
import { featureFlags } from '@/config/feature-flags.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const notificationStore = useNotificationStore()

const settings = ref({
  storeName: appConfig.name,
  supportEmail: appConfig.supportEmail,
  defaultCurrency: appConfig.defaultCurrency,
  defaultLocale: appConfig.defaultLocale
})

const flags = ref({ ...featureFlags })

function saveSettings() {
  notificationStore.success('Platform configurations and feature flags updated!')
}
</script>
