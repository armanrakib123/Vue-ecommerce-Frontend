<template>
  <AppProviders>
    <div id="nexora-root" class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-brand-500 selection:text-white transition-colors duration-200">
      <router-view />
    </div>
  </AppProviders>
</template>

<script setup>
import { onMounted } from 'vue'
import AppProviders from './providers/AppProviders.vue'
import { usePreferencesStore } from '@/stores/preferences.store.js'

const preferencesStore = usePreferencesStore()

onMounted(() => {
  // Sync initial theme
  if (preferencesStore.isDarkMode) {
    document.documentElement.classList.add('dark')
  }
})
</script>
