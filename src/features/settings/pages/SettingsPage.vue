<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">System Settings</h1>
      <p class="text-xs text-slate-500">Configure global platform options, theme preferences, and security</p>
    </div>
    <div class="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-8">
      <GeneralSettingsForm :settings="settings" @save="handleSave" />
      <hr class="border-slate-100 dark:border-slate-800" />
      <ThemeSettings />
      <hr class="border-slate-100 dark:border-slate-800" />
      <LanguageSettings />
      <hr class="border-slate-100 dark:border-slate-800" />
      <SecuritySettings />
    </div>
  </div>
</template>
<script setup>
import GeneralSettingsForm from '../components/GeneralSettingsForm.vue'
import ThemeSettings from '../components/ThemeSettings.vue'
import LanguageSettings from '../components/LanguageSettings.vue'
import SecuritySettings from '../components/SecuritySettings.vue'
import { useSettings } from '../composables/useSettings.js'
import { useNotificationStore } from '@/stores/notification.store.js'

const { settings } = useSettings()
const notificationStore = useNotificationStore()

function handleSave() {
  notificationStore.success('Platform configurations saved successfully.')
}
</script>
